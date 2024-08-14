#!/bin/bash

rw_test_file="/tmp/redirect_test.conf"
rw_load_file="/tmp/redirect_load.txt"

#if [ -e "$rw_test_file" ]; 
 
#then
#   echo "removing $rw_test_file "
#elif 
#    [ -e "$rw_load_file" ];

#then
# echo "removing $rw_load_file "
#
#fi 


for (( c=1; c<=5000; c++ ))
do  
echo "Redirect 301 ^/test_$c/ https://www.sterbcroyalbank.com/customer-service/index.html"  >> $rw_test_file 
echo "https://www.sterbcroyalbank.com/test_$c"  >> $rw_load_file
done