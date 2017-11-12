var json = "{"type": "Feature","properties": {"@id": "node/8087537","is_in:continent": "Europe","is_in:country": "United Kingdom","is_in:country_code": "GB",name": "Chester","population": "119000","wikidata": "Q170263","wikipedia": "en:Chester"},"geometry": {"type": "Point","coordinates": [-2.8908955, 53.1908873]},"id": "node/8087537"},{"type": "Feature","properties": {    "@id": "node/10021976",    "is_in": "Leicestershire, England, UK",    "is_in:continent": "Europe",    "is_in:country":"United Kingdom",    "is_in:country_code": "GB",    "is_in:county": "Leicestershire",    "name": "Leicester",    "name:cy": "Caerlŷr",    "name:he": "לסטר",    "name:hu": "Leicester",    "name:ja": "レスター",    "name:kn": "ಲೆಸ್ಟರ್",    "name:lt": "Lesteris",    "name:ru": "Лестер",    "name:uk": "Лестер",    "place": "city",    "population": "305700",    "wikidata": "Q83065",    "wikimedia_commons": "Category:Leicester",    "wikipedia": "en:Leicester"  },  "geometry": {   "type": "Point",    "coordinates": [      -1.1330789,      52.6361398    ]  },  "id": "node/10021976"},{  "type": "Feature",  "properties": {    "@id": "node/10671639",    "historic:official_name": "Colonia Domitiana Lindensium",    "is_in:continent": "Europe",    "is_in:country": "United Kingdom",    "is_in:country_code": "GB",    "is_in:county": "Lincolnshire",    "name": "Lincoln",    "name:ast": "Lincoln, Inglaterra",    "name:be": "Лінкальн",    "name:en": "Lincoln",    "name:he":"לינקולן",    "name:hu": "Lincoln",    "name:lt": "Linkolnas",    "name:ru": "Линкольн",    "name:sr": "Линколн",    "name:uk": "Лінкольн",    "old_name": "Lindum Colonia",    "place": "city",    "population": "86000",    "source": "Bing",    "wikidata": "Q180057",    "wikipedia": "en:Lincoln, England"  }";

$(document).ready(function () {
            $.getJSON(JSON.parse(json), function (data) {
                var items = [];
                $.each(data.features, function (key, val) {
                  $.each(val.properties, function(i,j){
                    items.push('<li id="' + key + '">' + val + '</li>');
                  })
                });
                $('<ul/>', {
                    'class':'my-new-list',
                    html:items.join('')
                }).appendTo('body');
            });
        });
