#include <wax.hpp>

void wax::receive_asset_transfer(
   name collection_name,
   name from,
   name to,
   std::vector<uint64_t> asset_ids,
   std::string memo
) {
   if (to != get_self()) {
      return;
   }

   assetowners_index assetowners( get_self(), get_self().value);

   for(uint64_t asset_id: asset_ids) {
      auto iterator = assetowners.find(asset_id);
      if(iterator == assetowners.end()) {
         assetowners.emplace(name("factoryworld"), [&]( auto& row ) {
            row.customer = from;
            row.asset_id = asset_id;
         });
      } else {
         assetowners.modify(iterator, name("factoryworld"), [&]( auto& row ) {
            row.customer = from;
            row.asset_id = asset_id;
         });
      }
   }
}

void wax::unstake( name customer, uint64_t asset_id ) {
   require_auth(customer);

   assetowners_index assetowners( get_self(), get_self().value);

   auto& record = assetowners.get(asset_id);

   eosio::check(customer == record.customer, "Customer doesn\'t own the token.");

   assetowners.erase(record);

   std::vector<uint64_t> asset_ids{ asset_id };

   action(
      permission_level{get_self(),name("active")},
      name("atomicassets"),
      name("transfer"),
      std::make_tuple(name("factoryworld"), customer, asset_ids, std::string(""))
    ).send();
}
