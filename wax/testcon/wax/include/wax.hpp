#include <eosio/eosio.hpp>
#include <vector>
using namespace eosio;

CONTRACT wax : public contract {
   public:
      using contract::contract;

      wax(name receiver, name code, datastream<const char*> ds):contract(receiver, code, ds) {}

      [[eosio::action]] void unstake( name customer, uint64_t asset_id );

      struct [[eosio::table]] assetowners_table {
         name customer;
         uint64_t asset_id;
         uint64_t primary_key() const { return asset_id; }
      };
      using assetowners_index = eosio::multi_index<name("assetowners"), assetowners_table>;

      [[eosio::on_notify("atomicassets::logtransfer")]] void receive_asset_transfer(
         name collection_name,
         name from,
         name to,
         std::vector <uint64_t> asset_ids,
         std::string memo
      );
};
