# Coronawatch - CubeJS powered analytics

### Start

1. `cd front && yarn`
2. `cd ../cube && yarn`
3. `cd ../db && docker-compose up -d`

To export sample data base get the `id` of the database container running and export the sample db file

```
docker exec -it <CONTAINER_ID> psql -h localhost -U coronawatchuser -d coronawatchdb -f /var/lib/postgres/sample_data/covid_cases.sql
```
