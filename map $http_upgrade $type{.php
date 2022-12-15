map $http_upgrade $type{
    default "web";
    websocket "ws";
}

server{
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/demo/public;
    index index.php index.html index.htm index.nginx-debian.html;
    server_name _;
location / { 

    try_files /nonexistent @$type;
 } 
 location @web {     
    try_files $uri $uri/ /index.php?$query_string;
     } 
    location @ws {
        proxy_pass      http://127.0.0.1:6020;
        proxy_set_header        Host $host;
        proxy_read_timeout      60;
        proxy_connect_timeout  60;
        proxy_redirect          off;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }     

    location ~ \.php$ {
      include sinnpets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    } 
    location ~ /\.ht {
        deny all;
    }   
    
}