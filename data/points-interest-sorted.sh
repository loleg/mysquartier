grep Feature bern-poi.geojson | cut -d '"' -f16  | cut -d ':' -f 1| sort | uniq -c | sort -rn | more
