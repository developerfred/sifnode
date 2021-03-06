#!/usr/bin/env bash

sifnoded init test --chain-id=sifchain

sifnodecli config output json
sifnodecli config indent true
sifnodecli config trust-node true
sifnodecli config chain-id sifchain
sifnodecli config keyring-backend test

sifnodecli keys add user1
sifnodecli keys add user2

sifnoded add-genesis-account $(sifnodecli keys show user1 -a) 1000rwn,100000000stake
sifnoded add-genesis-account $(sifnodecli keys show user2 -a) 1000rwn,100000000stake

sifnoded gentx --name user1 --keyring-backend test

echo "Collecting genesis txs..."
sifnoded collect-gentxs

echo "Validating genesis file..."
sifnoded validate-genesis
