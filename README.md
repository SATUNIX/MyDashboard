# MyDashboard
Grafana dashboard setup for my homelab:

Use the docker file to setup the proxy, use the JSON to import into grafana :) 


![image](https://github.com/user-attachments/assets/c959add9-1526-49df-9d4c-874dca2401ca)


Main data sources are the CORS proxy (use docker file in this repo)
Also uses node_exporter and Prometheus to get data into grafana: 

```bash
docker run -d \
  --name node_exporter \
  --pid="host" \
  --network monitoring \
  -v "/:/host:ro,rslave" \
  -p 9100:9100 \
  prom/node-exporter \
  --path.rootfs=/host
```

Modify this to how you need. 
