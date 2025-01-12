#!/bin/bash
check(){
 branch=$1
 echo pivotting to $branch;
 echo "";
 git checkout $branch .gitignore;
 git add .;
 stash=$(git status --porcelain|wc -l);
 [[ $stash -gt 0 ]] && git stash;
 git checkout $branch;
 [[ $stash -gt 0 ]] && git checkout stash .;
 git restore --staged .; 
 git reset --hard $branch;
}

 check form;
 check interface;
 git fetch interface;
 check interface/stable;
 process=$(ps aux|grep 'import=./Blik_2023_interface.js'|head -1|tr -s ' '|cut -d' ' -f2);
 echo "Restarting Form: $process";
 kill $process;
 cd $(pwd)/..;
 NODE_TLS_REJECT_UNAUTHORIZED=0 node --inspect --experimental-vm-modules --import=./Blik_2023_interface.js ./Blik_2023_host.js expose ./Blik_2023_form.js ./Blik_2020_parameters.json/https > log 2>&1 &
