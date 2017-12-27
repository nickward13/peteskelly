#!/bin/bash
export resource_group=peteskelly  
export resource_location=australiasoutheast  
export storage_acct=hectsecurefuncstorage8
export storage_sku=Standard_LRS  
export functionapp_name=hectsecurefuncapp8  
export adapp_apiname=securefuncappapi8  
export adpp_clientname=securefuncappclient8

# Create a resource group 
az group create -n $resource_group -l $resource_location -o json 

# Create a storage app for the storage
az storage account create -n $storage_acct -g $resource_group -l $resource_location --sku $storage_sku --output json 

# Create the FunctionApp within the AppService using a consumption plan
az functionapp create -n $functionapp_name -g $resource_group -s $storage_acct -c $resource_location --output json
