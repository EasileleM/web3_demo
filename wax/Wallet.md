## Default keys

[[
    "EOS4yxqE5KYv5XaB2gj6sZTUDiGzKm42KfiRPDCeXWZUsAZZVXk1F",
    "5JTZaN1zabi5wyC3LcdeZG3AzF7sLDX4JFqMDe68ThLC3Q5nYez"
  ],[
    "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
    "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
  ]
]

## Create wallet
cleos wallet create --to-console

Pass - PW5KNzWJ2iNpWiT6GjXi63eJvRcSCyNrewa2YSEENegvCJvSWJnT7

## Open wallet 

cleos wallet open 

cleos wallet unlock --password PW5KNzWJ2iNpWiT6GjXi63eJvRcSCyNrewa2YSEENegvCJvSWJnT7

## Named wallet

cleos wallet create --to-console --name testwallet

pass - PW5KhWuoHfANbv8T2TM9C1g2SKzSViuR5v5Evx4iuDnvtE8oEW7TQ

cleos wallet open 

cleos wallet unlock --name testwallet --password PW5KhWuoHfANbv8T2TM9C1g2SKzSViuR5v5Evx4iuDnvtE8oEW7TQ

## Smart contract init

eosio-init -project wax

cd build && cmake ..

make

cleos wallet create_key

key - EOS535ChsJkRh6UFvX989EW8GVd9YB9U8w5UrrR6uH4hes9WZxgWe

cleos create account eosio waxsc1 EOS535ChsJkRh6UFvX989EW8GVd9YB9U8w5UrrR6uH4hes9WZxgWe

cleos set contract waxsc1 . -p waxsc1@active

cleos push action waxsc1 hi '["test"]' -p waxsc1@active


################################################################

PASS TO FACTORYWORLD - PW5JYJ8oA7FhMkR33ZneiB312NPE6tVeNz4HtfmgSrdDNT7sMZNTx
PASS TO MINE - PW5JVAD49B4NgVAaPpAmRVUC39ibdAyeypyoFxAbAxXbRLTJshW5M
PASS TO FACTORYCITYY - PW5K1Tc959dz5Zzyeac2BdM67hrRgH4QyDZkgJ5T6te5fGrG7jz1F

cleos wallet unlock -n factoryworld --password PW5JYJ8oA7FhMkR33ZneiB312NPE6tVeNz4HtfmgSrdDNT7sMZNTx
cleos wallet unlock -n factorycityy --password PW5K1Tc959dz5Zzyeac2BdM67hrRgH4QyDZkgJ5T6te5fGrG7jz1F

Owner

EOS private key:
5KedR5TaWAk13D5eNCPULSgARPkiwBTQ3XbpH7LHcEuhYw8SkX2

EOS public key:
EOS57HPLkSA3WDPYdhN4cQUQ7AkCycbwoFeMZY3cK8itvSKpDiWye

Active

EOS private key:
5J4Rgq3jHF5urBkgxPDPd5aRtzn8pWtxtDjEiXUU19rMYe6jvwQ

EOS public key:
EOS5qNkhGZZYW3UPSWTLehxJ4CE3xwGM8K56vddCzUiZpJ9bNCfrf

cleos -u https://wax.greymass.com push transaction '{ "delay_sec": 0, "max_cpu_usage_ms": 0, "actions": [ { "account": "atomicassets", "name": "transfer", "data": { "from": "factorycityy", "to": "factoryworld", "asset_ids": [ 1099600803852 ], "memo": "" }, "authorization": [ { "actor": "factorycityy", "permission": "active" } ] } ] }'

cleos -u https://wax.greymass.com push transaction '{ "delay_sec": 0, "max_cpu_usage_ms": 0, "actions": [ { "account": "atomicassets", "name": "transfer", "data": { "from": "factoryworld", "to": "factorycityy", "asset_ids": [ 1099600803852 ], "memo": "" }, "authorization": [ { "actor": "factoryworld", "permission": "active" } ] } ] }'