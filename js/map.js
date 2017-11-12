var lat = -1.7531;
var lon = 53.7974;
// var data_url = "http://overpass-api.de/api/intepreter?data=way[ref=%22A709%22][highway=primary][name=%22Authur%27s%20Place%22];"

var styles = {
  'highway': {
    'motorway': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(32, 65, 153, 1)',
        width: 8
      })
    }),
      'trunk': new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'rgba(39, 144, 153, 1)',
          width: 8
        })
      }),
    'primary': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(30, 130, 52, 1)',
        width: 8
      })
    }),
    'secondary': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(168, 168, 63, 1)',
        width: 8
      })
    })
  },
  'railway': {
    'rail': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(100, 100, 100, 1)',
        width: 2
      })
    })
  }
}

var tert_styles = {
  'highway': {
    'tertiary': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(199, 145, 118, 1)',
        width: 8
      })
    })
  }
}

var unc_styles = {
  'highway': {
    'unclassified': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(199, 193, 168, 1)',
        width: 6
      })
    })
  }
}



var ped_styles = {
  'highway': {
    'cycleway': new ol.style.Style({
      stroke: new ol.style.Stroke({
        lineDash: [2.5],
        color: 'rgba(242, 198, 57, 1)',
        width: 1
      })
    }),
    'footway': new ol.style.Style({
      stroke: new ol.style.Stroke({
        lineDash: [5],
        color: 'rgba(189, 189, 89, 1)',
        width: 2
      })
    })
  }
}

var natural_styles = {
  'natural': {
    'grassland': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(122, 235, 125, 1)'
      })
  }),
    'water': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(10, 139, 214, 1)'
      })
    }),
    'sand': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(250, 213, 154, 1)'
      })
    }),
    'wood': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(31, 120, 35, 1)'
      })
    })
  }
}

var amenity_styles = {
  'amenity': {
    'hospital': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(178, 65, 77, 1)'
      })
    }),
    'townhall': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(178, 56, 52, 1)'
      })
    })
  }
}


var land_use_styles = {
  'landuse': {
    'basin': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(82, 159, 171, 1)'
      })
  }),
    'farmland': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(171, 145, 139, 1)'
      })
    }),
    'grass': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(122, 235, 125, 1)'
      })
    }),
    'industrial': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(171, 127, 102, 1)'
      })
    }),
    'forest': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(31, 120, 35, 1)'
      })
    }),
    'meadow': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(122, 235, 125, 1)'
      })
    }),
    'retail': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(235, 117, 106, 1)'
      })
    })
  }
}

var aux_styles = {
  'highway': {
    'service': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(0, 0, 0, 1)',
        width: 2
      })
    }),
    'track': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(100, 100, 100, 1)',
        width: 1
      })
    })
  }
}

var aeroway_styles = {
  'aeroway': {
    'runway': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(150, 117, 171, 1)',
        width: 20
      })
    }),
    'taxiway': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(150, 117, 171, 1)',
        width: 6
      })
    })
  }
}

var res_rd_styles = {
  'highway': {
    'residential': new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(125, 125, 125, 1)',
        width: 4
      })
    })
  }
}



var building_styles = {
  'building': {
    '.*': new ol.style.Style({
      zIndex: 100,
      // stroke: new ol.style.Stroke({
      //   color: 'rgba(246, 99, 79, 1.0)',
      //   width: 1
      // }),
      fill: new ol.style.Fill({
        color: 'rgba(200, 200, 200, 1)'
      })
    })
  },
  'aeroway': {
    'apron': new ol.style.Style({
      zIndex: 100,
      fill: new ol.style.Fill({
        color: 'rgba(222, 158, 255, 1)'
      })
    })
  }
}


var osm = new ol.layer.Tile({
  title: "PlaceholderX",
  source: new ol.source.OSM()
})

var osm_no_labels = new ol.layer.Tile({
  source: new ol.source.OSM({
    url: "http://a.www.toolserver.org/tiles/osm-no-labels/{z}/{x}/{y}.png",
    crossOrigin: null
  })
})



var vectorSource = new ol.source.Vector({
  format: new ol.format.OSMXML(),
  loader: function(extent, resolution, projection) {
    var epsg4326Extent =
        ol.proj.transformExtent(extent, projection, 'EPSG:4326');
    var client = new XMLHttpRequest();
    client.open('POST', 'https://overpass.kumi.systems/api/interpreter');
    client.addEventListener('load', function() {
      var features = new ol.format.OSMXML().readFeatures(client.responseText, {
        featureProjection: map.getView().getProjection()
      });
      vectorSource.addFeatures(features);
    });
    var query = '(node(' +
        epsg4326Extent[1] + ',' + epsg4326Extent[0] + ',' +
        epsg4326Extent[3] + ',' + epsg4326Extent[2] +
        ');rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out meta;';
    client.send(query);
  },
  strategy: ol.loadingstrategy.bbox
});

var vectors = new ol.layer.Vector({
  title: "Placeholder",
  source: vectorSource,
  style: function(feature) {
    for (var key in styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var aeroway_vectors = new ol.layer.Vector({
  title: "Airport-related",
  source: vectorSource,
  style: function(feature) {
    for (var key in aeroway_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in aeroway_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return aeroway_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var amenity_vectors = new ol.layer.Vector({
  title: "Amenity",
  source: vectorSource,
  style: function(feature) {
    for (var key in amenity_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in amenity_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return amenity_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var natural_vectors = new ol.layer.Vector({
  title: "Natural resources",
  source: vectorSource,
  style: function(feature) {
    for (var key in natural_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in natural_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return natural_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var building_vectors = new ol.layer.Vector({
  title: "Buildings",
  source: vectorSource,
  style: function(feature) {
    for (var key in building_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in building_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return building_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var unc_vectors = new ol.layer.Vector({
  title: "Unclassified roads",
  source: vectorSource,
  style: function(feature) {
    for (var key in unc_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in unc_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return unc_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var tert_vectors = new ol.layer.Vector({
  title: "Tertiary roads",
  source: vectorSource,
  style: function(feature) {
    for (var key in tert_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in tert_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return tert_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var ped_vectors = new ol.layer.Vector({
  title: "Pedestrian & cyclist routes",
  source: vectorSource,
  style: function(feature) {
    for (var key in ped_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in ped_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return ped_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var land_use_vectors = new ol.layer.Vector({
  title: "Land use",
  source: vectorSource,
  style: function(feature) {
    for (var key in land_use_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in land_use_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return land_use_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var aux_vectors = new ol.layer.Vector({
  title: "Auxilliary roads",
  source: vectorSource,
  style: function(feature) {
    for (var key in aux_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in aux_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return aux_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var res_rd_vectors = new ol.layer.Vector({
  title: "Residential roads",
  source: vectorSource,
  style: function(feature) {
    for (var key in res_rd_styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in res_rd_styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return res_rd_styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

var layers = {
    full_list: [osm, land_use_vectors, natural_vectors, building_vectors, ped_vectors, aux_vectors, res_rd_vectors, unc_vectors, tert_vectors, vectors, aeroway_vectors, amenity_vectors]
};

var map = new ol.Map({
  target: 'map',
  layers: [aux_vectors, res_rd_vectors, unc_vectors, tert_vectors, vectors, aeroway_vectors],
  view: new ol.View({
    center: ol.proj.fromLonLat([lat, lon]),
    maxZoom: 16,
    zoom: 16,
    minZoom: 16
  })
});
