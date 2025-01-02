var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kuburan_1 = new ol.format.GeoJSON();
var features_kuburan_1 = format_kuburan_1.readFeatures(json_kuburan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuburan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kuburan_1.addFeatures(features_kuburan_1);
var lyr_kuburan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kuburan_1, 
                style: style_kuburan_1,
                popuplayertitle: 'kuburan',
                interactive: true,
                title: '<img src="styles/legend/kuburan_1.png" /> kuburan'
            });
var format_Kolam_2 = new ol.format.GeoJSON();
var features_Kolam_2 = format_Kolam_2.readFeatures(json_Kolam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kolam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kolam_2.addFeatures(features_Kolam_2);
var lyr_Kolam_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kolam_2, 
                style: style_Kolam_2,
                popuplayertitle: 'Kolam',
                interactive: true,
                title: '<img src="styles/legend/Kolam_2.png" /> Kolam'
            });
var format_kios_kedai_3 = new ol.format.GeoJSON();
var features_kios_kedai_3 = format_kios_kedai_3.readFeatures(json_kios_kedai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kios_kedai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kios_kedai_3.addFeatures(features_kios_kedai_3);
var lyr_kios_kedai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kios_kedai_3, 
                style: style_kios_kedai_3,
                popuplayertitle: 'kios_kedai',
                interactive: true,
                title: '<img src="styles/legend/kios_kedai_3.png" /> kios_kedai'
            });
var format_Kantor_4 = new ol.format.GeoJSON();
var features_Kantor_4 = format_Kantor_4.readFeatures(json_Kantor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kantor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantor_4.addFeatures(features_Kantor_4);
var lyr_Kantor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kantor_4, 
                style: style_Kantor_4,
                popuplayertitle: 'Kantor',
                interactive: true,
                title: '<img src="styles/legend/Kantor_4.png" /> Kantor'
            });
var format_kandang_5 = new ol.format.GeoJSON();
var features_kandang_5 = format_kandang_5.readFeatures(json_kandang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kandang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kandang_5.addFeatures(features_kandang_5);
var lyr_kandang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kandang_5, 
                style: style_kandang_5,
                popuplayertitle: 'kandang',
                interactive: true,
                title: '<img src="styles/legend/kandang_5.png" /> kandang'
            });
var format_Gudang_6 = new ol.format.GeoJSON();
var features_Gudang_6 = format_Gudang_6.readFeatures(json_Gudang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gudang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gudang_6.addFeatures(features_Gudang_6);
var lyr_Gudang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gudang_6, 
                style: style_Gudang_6,
                popuplayertitle: 'Gudang',
                interactive: true,
                title: '<img src="styles/legend/Gudang_6.png" /> Gudang'
            });
var format_Gedung_Sekolah_7 = new ol.format.GeoJSON();
var features_Gedung_Sekolah_7 = format_Gedung_Sekolah_7.readFeatures(json_Gedung_Sekolah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gedung_Sekolah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gedung_Sekolah_7.addFeatures(features_Gedung_Sekolah_7);
var lyr_Gedung_Sekolah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gedung_Sekolah_7, 
                style: style_Gedung_Sekolah_7,
                popuplayertitle: 'Gedung_Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Gedung_Sekolah_7.png" /> Gedung_Sekolah'
            });
var format_Doorsmeer_8 = new ol.format.GeoJSON();
var features_Doorsmeer_8 = format_Doorsmeer_8.readFeatures(json_Doorsmeer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Doorsmeer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Doorsmeer_8.addFeatures(features_Doorsmeer_8);
var lyr_Doorsmeer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Doorsmeer_8, 
                style: style_Doorsmeer_8,
                popuplayertitle: 'Doorsmeer',
                interactive: true,
                title: '<img src="styles/legend/Doorsmeer_8.png" /> Doorsmeer'
            });
var format_Bengkel_9 = new ol.format.GeoJSON();
var features_Bengkel_9 = format_Bengkel_9.readFeatures(json_Bengkel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bengkel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bengkel_9.addFeatures(features_Bengkel_9);
var lyr_Bengkel_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bengkel_9, 
                style: style_Bengkel_9,
                popuplayertitle: 'Bengkel',
                interactive: true,
                title: '<img src="styles/legend/Bengkel_9.png" /> Bengkel'
            });
var format_Tambak_10 = new ol.format.GeoJSON();
var features_Tambak_10 = format_Tambak_10.readFeatures(json_Tambak_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambak_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambak_10.addFeatures(features_Tambak_10);
var lyr_Tambak_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambak_10, 
                style: style_Tambak_10,
                popuplayertitle: 'Tambak',
                interactive: true,
                title: '<img src="styles/legend/Tambak_10.png" /> Tambak'
            });
var format_Rumah_11 = new ol.format.GeoJSON();
var features_Rumah_11 = format_Rumah_11.readFeatures(json_Rumah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_11.addFeatures(features_Rumah_11);
var lyr_Rumah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_11, 
                style: style_Rumah_11,
                popuplayertitle: 'Rumah',
                interactive: true,
                title: '<img src="styles/legend/Rumah_11.png" /> Rumah'
            });
var format_Tambak_12 = new ol.format.GeoJSON();
var features_Tambak_12 = format_Tambak_12.readFeatures(json_Tambak_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambak_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambak_12.addFeatures(features_Tambak_12);
var lyr_Tambak_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambak_12, 
                style: style_Tambak_12,
                popuplayertitle: 'Tambak',
                interactive: true,
                title: '<img src="styles/legend/Tambak_12.png" /> Tambak'
            });
var format_Rumah_Sendiri_13 = new ol.format.GeoJSON();
var features_Rumah_Sendiri_13 = format_Rumah_Sendiri_13.readFeatures(json_Rumah_Sendiri_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Sendiri_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Sendiri_13.addFeatures(features_Rumah_Sendiri_13);
var lyr_Rumah_Sendiri_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Sendiri_13, 
                style: style_Rumah_Sendiri_13,
                popuplayertitle: 'Rumah_Sendiri',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Sendiri_13.png" /> Rumah_Sendiri'
            });
var format_Ruko_14 = new ol.format.GeoJSON();
var features_Ruko_14 = format_Ruko_14.readFeatures(json_Ruko_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruko_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruko_14.addFeatures(features_Ruko_14);
var lyr_Ruko_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruko_14, 
                style: style_Ruko_14,
                popuplayertitle: 'Ruko',
                interactive: true,
                title: '<img src="styles/legend/Ruko_14.png" /> Ruko'
            });
var format_Rumah_15 = new ol.format.GeoJSON();
var features_Rumah_15 = format_Rumah_15.readFeatures(json_Rumah_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_15.addFeatures(features_Rumah_15);
var lyr_Rumah_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_15, 
                style: style_Rumah_15,
                popuplayertitle: 'Rumah',
                interactive: true,
                title: '<img src="styles/legend/Rumah_15.png" /> Rumah'
            });
var format_Pasar_16 = new ol.format.GeoJSON();
var features_Pasar_16 = format_Pasar_16.readFeatures(json_Pasar_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasar_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasar_16.addFeatures(features_Pasar_16);
var lyr_Pasar_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pasar_16, 
                style: style_Pasar_16,
                popuplayertitle: 'Pasar',
                interactive: true,
                title: '<img src="styles/legend/Pasar_16.png" /> Pasar'
            });
var format_Mesjid_17 = new ol.format.GeoJSON();
var features_Mesjid_17 = format_Mesjid_17.readFeatures(json_Mesjid_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesjid_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesjid_17.addFeatures(features_Mesjid_17);
var lyr_Mesjid_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesjid_17, 
                style: style_Mesjid_17,
                popuplayertitle: 'Mesjid',
                interactive: true,
                title: '<img src="styles/legend/Mesjid_17.png" /> Mesjid'
            });
var format_Lhn_Parkir_18 = new ol.format.GeoJSON();
var features_Lhn_Parkir_18 = format_Lhn_Parkir_18.readFeatures(json_Lhn_Parkir_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lhn_Parkir_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lhn_Parkir_18.addFeatures(features_Lhn_Parkir_18);
var lyr_Lhn_Parkir_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lhn_Parkir_18, 
                style: style_Lhn_Parkir_18,
                popuplayertitle: 'Lhn_Parkir',
                interactive: true,
                title: '<img src="styles/legend/Lhn_Parkir_18.png" /> Lhn_Parkir'
            });
var format_Lapangan_19 = new ol.format.GeoJSON();
var features_Lapangan_19 = format_Lapangan_19.readFeatures(json_Lapangan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_19.addFeatures(features_Lapangan_19);
var lyr_Lapangan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_19, 
                style: style_Lapangan_19,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_19.png" /> Lapangan'
            });
var format_Lahan_Kosong_20 = new ol.format.GeoJSON();
var features_Lahan_Kosong_20 = format_Lahan_Kosong_20.readFeatures(json_Lahan_Kosong_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Kosong_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Kosong_20.addFeatures(features_Lahan_Kosong_20);
var lyr_Lahan_Kosong_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Kosong_20, 
                style: style_Lahan_Kosong_20,
                popuplayertitle: 'Lahan_Kosong',
                interactive: true,
                title: '<img src="styles/legend/Lahan_Kosong_20.png" /> Lahan_Kosong'
            });
var format_Sungai_21 = new ol.format.GeoJSON();
var features_Sungai_21 = format_Sungai_21.readFeatures(json_Sungai_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_21.addFeatures(features_Sungai_21);
var lyr_Sungai_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_21, 
                style: style_Sungai_21,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_21.png" /> Sungai'
            });
var format_Lorong_22 = new ol.format.GeoJSON();
var features_Lorong_22 = format_Lorong_22.readFeatures(json_Lorong_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lorong_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lorong_22.addFeatures(features_Lorong_22);
var lyr_Lorong_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lorong_22, 
                style: style_Lorong_22,
                popuplayertitle: 'Lorong',
                interactive: true,
                title: '<img src="styles/legend/Lorong_22.png" /> Lorong'
            });
var format_Got_23 = new ol.format.GeoJSON();
var features_Got_23 = format_Got_23.readFeatures(json_Got_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Got_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Got_23.addFeatures(features_Got_23);
var lyr_Got_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Got_23, 
                style: style_Got_23,
                popuplayertitle: 'Got',
                interactive: true,
                title: '<img src="styles/legend/Got_23.png" /> Got'
            });
var format_Jalan_24 = new ol.format.GeoJSON();
var features_Jalan_24 = format_Jalan_24.readFeatures(json_Jalan_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_24.addFeatures(features_Jalan_24);
var lyr_Jalan_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_24, 
                style: style_Jalan_24,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_24.png" /> Jalan'
            });
var format_Gang_25 = new ol.format.GeoJSON();
var features_Gang_25 = format_Gang_25.readFeatures(json_Gang_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gang_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gang_25.addFeatures(features_Gang_25);
var lyr_Gang_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gang_25, 
                style: style_Gang_25,
                popuplayertitle: 'Gang',
                interactive: true,
                title: '<img src="styles/legend/Gang_25.png" /> Gang'
            });
var format_tambak5tambak4_26 = new ol.format.GeoJSON();
var features_tambak5tambak4_26 = format_tambak5tambak4_26.readFeatures(json_tambak5tambak4_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambak5tambak4_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambak5tambak4_26.addFeatures(features_tambak5tambak4_26);
var lyr_tambak5tambak4_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambak5tambak4_26, 
                style: style_tambak5tambak4_26,
                popuplayertitle: 'tambak5 — tambak4',
                interactive: true,
                title: 'tambak5 — tambak4'
            });
var format_rumah5rumah4_27 = new ol.format.GeoJSON();
var features_rumah5rumah4_27 = format_rumah5rumah4_27.readFeatures(json_rumah5rumah4_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah5rumah4_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah5rumah4_27.addFeatures(features_rumah5rumah4_27);
var lyr_rumah5rumah4_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah5rumah4_27, 
                style: style_rumah5rumah4_27,
                popuplayertitle: 'rumah5 — rumah4',
                interactive: true,
                title: 'rumah5 — rumah4'
            });
var format_ruko5ruko1_28 = new ol.format.GeoJSON();
var features_ruko5ruko1_28 = format_ruko5ruko1_28.readFeatures(json_ruko5ruko1_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ruko5ruko1_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ruko5ruko1_28.addFeatures(features_ruko5ruko1_28);
var lyr_ruko5ruko1_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ruko5ruko1_28, 
                style: style_ruko5ruko1_28,
                popuplayertitle: 'ruko5 — ruko1',
                interactive: true,
                title: 'ruko5 — ruko1'
            });
var format_pasar5pasar1_29 = new ol.format.GeoJSON();
var features_pasar5pasar1_29 = format_pasar5pasar1_29.readFeatures(json_pasar5pasar1_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasar5pasar1_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasar5pasar1_29.addFeatures(features_pasar5pasar1_29);
var lyr_pasar5pasar1_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasar5pasar1_29, 
                style: style_pasar5pasar1_29,
                popuplayertitle: 'pasar5 — pasar1',
                interactive: true,
                title: 'pasar5 — pasar1'
            });
var format_mesjid5mesjid1_30 = new ol.format.GeoJSON();
var features_mesjid5mesjid1_30 = format_mesjid5mesjid1_30.readFeatures(json_mesjid5mesjid1_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mesjid5mesjid1_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mesjid5mesjid1_30.addFeatures(features_mesjid5mesjid1_30);
var lyr_mesjid5mesjid1_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mesjid5mesjid1_30, 
                style: style_mesjid5mesjid1_30,
                popuplayertitle: 'mesjid5 — mesjid1',
                interactive: true,
                title: 'mesjid5 — mesjid1'
            });
var format_lapangan5lapangan4_31 = new ol.format.GeoJSON();
var features_lapangan5lapangan4_31 = format_lapangan5lapangan4_31.readFeatures(json_lapangan5lapangan4_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan5lapangan4_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan5lapangan4_31.addFeatures(features_lapangan5lapangan4_31);
var lyr_lapangan5lapangan4_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan5lapangan4_31, 
                style: style_lapangan5lapangan4_31,
                popuplayertitle: 'lapangan5 — lapangan4',
                interactive: true,
                title: 'lapangan5 — lapangan4'
            });
var format_lahankosong5lahankosong4_32 = new ol.format.GeoJSON();
var features_lahankosong5lahankosong4_32 = format_lahankosong5lahankosong4_32.readFeatures(json_lahankosong5lahankosong4_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahankosong5lahankosong4_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahankosong5lahankosong4_32.addFeatures(features_lahankosong5lahankosong4_32);
var lyr_lahankosong5lahankosong4_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lahankosong5lahankosong4_32, 
                style: style_lahankosong5lahankosong4_32,
                popuplayertitle: 'lahankosong5 — lahankosong4',
                interactive: true,
                title: 'lahankosong5 — lahankosong4'
            });
var format_kuburan5kuburan1_33 = new ol.format.GeoJSON();
var features_kuburan5kuburan1_33 = format_kuburan5kuburan1_33.readFeatures(json_kuburan5kuburan1_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuburan5kuburan1_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kuburan5kuburan1_33.addFeatures(features_kuburan5kuburan1_33);
var lyr_kuburan5kuburan1_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kuburan5kuburan1_33, 
                style: style_kuburan5kuburan1_33,
                popuplayertitle: 'kuburan5 — kuburan1',
                interactive: true,
                title: 'kuburan5 — kuburan1'
            });
var format_kolam5kolam1_34 = new ol.format.GeoJSON();
var features_kolam5kolam1_34 = format_kolam5kolam1_34.readFeatures(json_kolam5kolam1_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kolam5kolam1_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kolam5kolam1_34.addFeatures(features_kolam5kolam1_34);
var lyr_kolam5kolam1_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kolam5kolam1_34, 
                style: style_kolam5kolam1_34,
                popuplayertitle: 'kolam5 — kolam1',
                interactive: true,
                title: 'kolam5 — kolam1'
            });
var format_kantor5kantor1_35 = new ol.format.GeoJSON();
var features_kantor5kantor1_35 = format_kantor5kantor1_35.readFeatures(json_kantor5kantor1_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kantor5kantor1_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantor5kantor1_35.addFeatures(features_kantor5kantor1_35);
var lyr_kantor5kantor1_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kantor5kantor1_35, 
                style: style_kantor5kantor1_35,
                popuplayertitle: 'kantor5 — kantor1',
                interactive: true,
                title: 'kantor5 — kantor1'
            });
var format_gudang5gudang1_36 = new ol.format.GeoJSON();
var features_gudang5gudang1_36 = format_gudang5gudang1_36.readFeatures(json_gudang5gudang1_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gudang5gudang1_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gudang5gudang1_36.addFeatures(features_gudang5gudang1_36);
var lyr_gudang5gudang1_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gudang5gudang1_36, 
                style: style_gudang5gudang1_36,
                popuplayertitle: 'gudang5 — gudang1',
                interactive: true,
                title: 'gudang5 — gudang1'
            });
var format_gedungsekolah5gedungsekolah1_37 = new ol.format.GeoJSON();
var features_gedungsekolah5gedungsekolah1_37 = format_gedungsekolah5gedungsekolah1_37.readFeatures(json_gedungsekolah5gedungsekolah1_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gedungsekolah5gedungsekolah1_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gedungsekolah5gedungsekolah1_37.addFeatures(features_gedungsekolah5gedungsekolah1_37);
var lyr_gedungsekolah5gedungsekolah1_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gedungsekolah5gedungsekolah1_37, 
                style: style_gedungsekolah5gedungsekolah1_37,
                popuplayertitle: 'gedungsekolah5 — gedungsekolah1',
                interactive: true,
                title: 'gedungsekolah5 — gedungsekolah1'
            });
var format_doorsmeer5doorsmeer1_38 = new ol.format.GeoJSON();
var features_doorsmeer5doorsmeer1_38 = format_doorsmeer5doorsmeer1_38.readFeatures(json_doorsmeer5doorsmeer1_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_doorsmeer5doorsmeer1_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_doorsmeer5doorsmeer1_38.addFeatures(features_doorsmeer5doorsmeer1_38);
var lyr_doorsmeer5doorsmeer1_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_doorsmeer5doorsmeer1_38, 
                style: style_doorsmeer5doorsmeer1_38,
                popuplayertitle: 'doorsmeer5 — doorsmeer1',
                interactive: true,
                title: 'doorsmeer5 — doorsmeer1'
            });
var format_Batas_wilayah_39 = new ol.format.GeoJSON();
var features_Batas_wilayah_39 = format_Batas_wilayah_39.readFeatures(json_Batas_wilayah_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_wilayah_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_wilayah_39.addFeatures(features_Batas_wilayah_39);
var lyr_Batas_wilayah_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_wilayah_39, 
                style: style_Batas_wilayah_39,
                popuplayertitle: 'Batas_wilayah',
                interactive: true,
                title: '<img src="styles/legend/Batas_wilayah_39.png" /> Batas_wilayah'
            });
var format_Batas_Gampong_40 = new ol.format.GeoJSON();
var features_Batas_Gampong_40 = format_Batas_Gampong_40.readFeatures(json_Batas_Gampong_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Gampong_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Gampong_40.addFeatures(features_Batas_Gampong_40);
var lyr_Batas_Gampong_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Gampong_40, 
                style: style_Batas_Gampong_40,
                popuplayertitle: 'Batas_Gampong',
                interactive: true,
                title: '<img src="styles/legend/Batas_Gampong_40.png" /> Batas_Gampong'
            });
var format_bengkel5bengkel1_41 = new ol.format.GeoJSON();
var features_bengkel5bengkel1_41 = format_bengkel5bengkel1_41.readFeatures(json_bengkel5bengkel1_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bengkel5bengkel1_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bengkel5bengkel1_41.addFeatures(features_bengkel5bengkel1_41);
var lyr_bengkel5bengkel1_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bengkel5bengkel1_41, 
                style: style_bengkel5bengkel1_41,
                popuplayertitle: 'bengkel5 — bengkel1',
                interactive: true,
                title: 'bengkel5 — bengkel1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_kuburan_1.setVisible(true);lyr_Kolam_2.setVisible(true);lyr_kios_kedai_3.setVisible(true);lyr_Kantor_4.setVisible(true);lyr_kandang_5.setVisible(true);lyr_Gudang_6.setVisible(true);lyr_Gedung_Sekolah_7.setVisible(true);lyr_Doorsmeer_8.setVisible(true);lyr_Bengkel_9.setVisible(true);lyr_Tambak_10.setVisible(true);lyr_Rumah_11.setVisible(true);lyr_Tambak_12.setVisible(true);lyr_Rumah_Sendiri_13.setVisible(true);lyr_Ruko_14.setVisible(true);lyr_Rumah_15.setVisible(true);lyr_Pasar_16.setVisible(true);lyr_Mesjid_17.setVisible(true);lyr_Lhn_Parkir_18.setVisible(true);lyr_Lapangan_19.setVisible(true);lyr_Lahan_Kosong_20.setVisible(true);lyr_Sungai_21.setVisible(true);lyr_Lorong_22.setVisible(true);lyr_Got_23.setVisible(true);lyr_Jalan_24.setVisible(true);lyr_Gang_25.setVisible(true);lyr_tambak5tambak4_26.setVisible(true);lyr_rumah5rumah4_27.setVisible(true);lyr_ruko5ruko1_28.setVisible(true);lyr_pasar5pasar1_29.setVisible(true);lyr_mesjid5mesjid1_30.setVisible(true);lyr_lapangan5lapangan4_31.setVisible(true);lyr_lahankosong5lahankosong4_32.setVisible(true);lyr_kuburan5kuburan1_33.setVisible(true);lyr_kolam5kolam1_34.setVisible(true);lyr_kantor5kantor1_35.setVisible(true);lyr_gudang5gudang1_36.setVisible(true);lyr_gedungsekolah5gedungsekolah1_37.setVisible(true);lyr_doorsmeer5doorsmeer1_38.setVisible(true);lyr_Batas_wilayah_39.setVisible(true);lyr_Batas_Gampong_40.setVisible(true);lyr_bengkel5bengkel1_41.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_kuburan_1,lyr_Kolam_2,lyr_kios_kedai_3,lyr_Kantor_4,lyr_kandang_5,lyr_Gudang_6,lyr_Gedung_Sekolah_7,lyr_Doorsmeer_8,lyr_Bengkel_9,lyr_Tambak_10,lyr_Rumah_11,lyr_Tambak_12,lyr_Rumah_Sendiri_13,lyr_Ruko_14,lyr_Rumah_15,lyr_Pasar_16,lyr_Mesjid_17,lyr_Lhn_Parkir_18,lyr_Lapangan_19,lyr_Lahan_Kosong_20,lyr_Sungai_21,lyr_Lorong_22,lyr_Got_23,lyr_Jalan_24,lyr_Gang_25,lyr_tambak5tambak4_26,lyr_rumah5rumah4_27,lyr_ruko5ruko1_28,lyr_pasar5pasar1_29,lyr_mesjid5mesjid1_30,lyr_lapangan5lapangan4_31,lyr_lahankosong5lahankosong4_32,lyr_kuburan5kuburan1_33,lyr_kolam5kolam1_34,lyr_kantor5kantor1_35,lyr_gudang5gudang1_36,lyr_gedungsekolah5gedungsekolah1_37,lyr_doorsmeer5doorsmeer1_38,lyr_Batas_wilayah_39,lyr_Batas_Gampong_40,lyr_bengkel5bengkel1_41];
lyr_kuburan_1.set('fieldAliases', {'Id': 'Id', 'NM_Pemilik': 'NM_Pemilik', 'NO_Kontak': 'NO_Kontak', 'Luas_Lahan': 'Luas_Lahan', });
lyr_Kolam_2.set('fieldAliases', {'Id': 'Id', 'Pemilik': 'Pemilik', 'Kontak': 'Kontak', 'Jenis_Ikan': 'Jenis_Ikan', 'Jenis_Usah': 'Jenis_Usah', });
lyr_kios_kedai_3.set('fieldAliases', {'Id': 'Id', 'NM_Pmlik': 'NM_Pmlik', 'NO_Kontak': 'NO_Kontak', 'JNIS_usaha': 'JNIS_usaha', 'Stts': 'Stts', 'Luas': 'Luas', 'luas_lahan': 'luas_lahan', });
lyr_Kantor_4.set('fieldAliases', {'Id': 'Id', 'NM_Kantor': 'NM_Kantor', 'NMKPL_KNTR': 'NMKPL_KNTR', 'NO_Kontak': 'NO_Kontak', 'Luas_BGNN': 'Luas_BGNN', 'Luas_Tanah': 'Luas_Tanah', });
lyr_kandang_5.set('fieldAliases', {'Id': 'Id', 'pemilik': 'pemilik', 'kontak': 'kontak', 'JNS_usaha': 'JNS_usaha', 'Luas_BGNN': 'Luas_BGNN', 'Luas_LHN': 'Luas_LHN', });
lyr_Gudang_6.set('fieldAliases', {'Id': 'Id', 'Pemilik': 'Pemilik', 'Nama_Gudan': 'Nama_Gudan', 'Status': 'Status', 'Luas': 'Luas', });
lyr_Gedung_Sekolah_7.set('fieldAliases', {'Id': 'Id', 'Nama_SKLH': 'Nama_SKLH', 'NM_KEPSEK': 'NM_KEPSEK', 'NO_HP': 'NO_HP', 'Luas_BGNN': 'Luas_BGNN', 'LUAS_LHN': 'LUAS_LHN', });
lyr_Doorsmeer_8.set('fieldAliases', {'Id': 'Id', 'NM_Doorsme': 'NM_Doorsme', 'Pemilik': 'Pemilik', 'Luas': 'Luas', });
lyr_Bengkel_9.set('fieldAliases', {'Id': 'Id', 'Pemilik': 'Pemilik', 'Kontak': 'Kontak', 'Jenis': 'Jenis', 'Status': 'Status', 'Luas': 'Luas', });
lyr_Tambak_10.set('fieldAliases', {'Id': 'Id', });
lyr_Rumah_11.set('fieldAliases', {'Id': 'Id', 'Nama_pemil': 'Nama_pemil', 'luas': 'luas', });
lyr_Tambak_12.set('fieldAliases', {'Id': 'Id', 'Lebar': 'Lebar', 'Luas_Bangu': 'Luas_Bangu', 'Jenis_Ikan': 'Jenis_Ikan', 'Nama_Pemil': 'Nama_Pemil', 'NO_HP': 'NO_HP', 'Stus_Usaha': 'Stus_Usaha', });
lyr_Rumah_Sendiri_13.set('fieldAliases', {'Id': 'Id', 'No_Rumah': 'No_Rumah', 'Jenis_Lant': 'Jenis_Lant', 'Nama_KK': 'Nama_KK', 'Pekerjaan': 'Pekerjaan', 'No_KTP': 'No_KTP', 'NO_KK': 'NO_KK', 'Jlh_Laki': 'Jlh_Laki', 'Jlh_Wnta': 'Jlh_Wnta', 'Sts_Kepemi': 'Sts_Kepemi', 'Jns_Bgunan': 'Jns_Bgunan', 'Pddk_trkhr': 'Pddk_trkhr', });
lyr_Ruko_14.set('fieldAliases', {'Id': 'Id', 'Pemilik': 'Pemilik', 'Kontak': 'Kontak', 'Jenis_Usah': 'Jenis_Usah', 'STTS': 'STTS', 'Luas_BGN': 'Luas_BGN', 'Luas_LHN': 'Luas_LHN', });
lyr_Rumah_15.set('fieldAliases', {'Id': 'Id', 'Lebar': 'Lebar', 'No_rumah': 'No_rumah', 'Sts_Kepemi': 'Sts_Kepemi', 'Jns_bgnn': 'Jns_bgnn', 'Jns_lntai': 'Jns_lntai', 'Nama_kk': 'Nama_kk', 'Pdd_trkhir': 'Pdd_trkhir', 'Jlh_Laki': 'Jlh_Laki', 'Jlh_Wnita': 'Jlh_Wnita', 'Ttl_Hunian': 'Ttl_Hunian', 'NO_KTP': 'NO_KTP', 'NO_Telp': 'NO_Telp', });
lyr_Pasar_16.set('fieldAliases', {'Id': 'Id', 'Pemilik': 'Pemilik', 'Kontak': 'Kontak', 'JNS_Usaha': 'JNS_Usaha', 'Status': 'Status', 'Luas_Bang': 'Luas_Bang', });
lyr_Mesjid_17.set('fieldAliases', {'Id': 'Id', 'Luas_msjd': 'Luas_msjd', 'Nm_Mesjid': 'Nm_Mesjid', 'Luas_Lahan': 'Luas_Lahan', 'NM_Imum': 'NM_Imum', 'No_Kontak': 'No_Kontak', });
lyr_Lhn_Parkir_18.set('fieldAliases', {'Id': 'Id', 'Nama_tmpt': 'Nama_tmpt', 'Luas': 'Luas', });
lyr_Lapangan_19.set('fieldAliases', {'Id': 'Id', 'NM_Pemilik': 'NM_Pemilik', 'NO_Kontak': 'NO_Kontak', 'JNS_KEG': 'JNS_KEG', 'Luas_Lahan': 'Luas_Lahan', 'Luas': 'Luas', 'Luas_BGNN': 'Luas_BGNN', });
lyr_Lahan_Kosong_20.set('fieldAliases', {'Id': 'Id', 'NM_Pemilik': 'NM_Pemilik', 'Kontak': 'Kontak', 'JNS_TNMN': 'JNS_TNMN', 'PRDKS_JLH_': 'PRDKS_JLH_', 'JNS_Irigas': 'JNS_Irigas', 'Luas_Lahan': 'Luas_Lahan', 'Status': 'Status', });
lyr_Sungai_21.set('fieldAliases', {'Id': 'Id', 'Nm_Sungai': 'Nm_Sungai', 'Pjg_sungai': 'Pjg_sungai', });
lyr_Lorong_22.set('fieldAliases', {'Id': 'Id', 'Nama_Lrg': 'Nama_Lrg', 'Panjang_lr': 'Panjang_lr', 'Lebar_lr': 'Lebar_lr', 'Status_Lrg': 'Status_Lrg', 'Kondisi_Lr': 'Kondisi_Lr', 'Kategori_L': 'Kategori_L', 'Pembiayaan': 'Pembiayaan', 'Thn_Perbai': 'Thn_Perbai', });
lyr_Got_23.set('fieldAliases', {'Id': 'Id', 'Pjg_Got': 'Pjg_Got', 'Lbr_Got': 'Lbr_Got', });
lyr_Jalan_24.set('fieldAliases', {'Id': 'Id', 'Nama_Jalan': 'Nama_Jalan', 'Pjg_Jalan': 'Pjg_Jalan', 'Lbr_jalan': 'Lbr_jalan', 'Status_Jal': 'Status_Jal', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'Thn_perbai': 'Thn_perbai', });
lyr_Gang_25.set('fieldAliases', {'Id': 'Id', 'Nama_GG': 'Nama_GG', 'Panjang_GG': 'Panjang_GG', 'Lebar_GG': 'Lebar_GG', 'Status_GG': 'Status_GG', 'Kategori_G': 'Kategori_G', 'Pembiayaan': 'Pembiayaan', 'Tahun_Perb': 'Tahun_Perb', });
lyr_tambak5tambak4_26.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_rumah5rumah4_27.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_ruko5ruko1_28.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_pasar5pasar1_29.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_mesjid5mesjid1_30.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_lapangan5lapangan4_31.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_lahankosong5lahankosong4_32.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_kuburan5kuburan1_33.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_kolam5kolam1_34.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_kantor5kantor1_35.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_gudang5gudang1_36.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_gedungsekolah5gedungsekolah1_37.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_doorsmeer5doorsmeer1_38.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Batas_wilayah_39.set('fieldAliases', {'Id': 'Id', });
lyr_Batas_Gampong_40.set('fieldAliases', {'Id': 'Id', 'Meter': 'Meter', });
lyr_bengkel5bengkel1_41.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_kuburan_1.set('fieldImages', {'Id': '', 'NM_Pemilik': '', 'NO_Kontak': '', 'Luas_Lahan': '', });
lyr_Kolam_2.set('fieldImages', {'Id': '', 'Pemilik': '', 'Kontak': '', 'Jenis_Ikan': '', 'Jenis_Usah': '', });
lyr_kios_kedai_3.set('fieldImages', {'Id': '', 'NM_Pmlik': '', 'NO_Kontak': '', 'JNIS_usaha': '', 'Stts': '', 'Luas': '', 'luas_lahan': '', });
lyr_Kantor_4.set('fieldImages', {'Id': '', 'NM_Kantor': '', 'NMKPL_KNTR': '', 'NO_Kontak': '', 'Luas_BGNN': '', 'Luas_Tanah': '', });
lyr_kandang_5.set('fieldImages', {'Id': '', 'pemilik': '', 'kontak': '', 'JNS_usaha': '', 'Luas_BGNN': '', 'Luas_LHN': '', });
lyr_Gudang_6.set('fieldImages', {'Id': '', 'Pemilik': '', 'Nama_Gudan': '', 'Status': '', 'Luas': '', });
lyr_Gedung_Sekolah_7.set('fieldImages', {'Id': '', 'Nama_SKLH': '', 'NM_KEPSEK': '', 'NO_HP': '', 'Luas_BGNN': '', 'LUAS_LHN': '', });
lyr_Doorsmeer_8.set('fieldImages', {'Id': '', 'NM_Doorsme': '', 'Pemilik': '', 'Luas': '', });
lyr_Bengkel_9.set('fieldImages', {'Id': '', 'Pemilik': '', 'Kontak': '', 'Jenis': '', 'Status': '', 'Luas': '', });
lyr_Tambak_10.set('fieldImages', {'Id': '', });
lyr_Rumah_11.set('fieldImages', {'Id': '', 'Nama_pemil': '', 'luas': '', });
lyr_Tambak_12.set('fieldImages', {'Id': '', 'Lebar': '', 'Luas_Bangu': '', 'Jenis_Ikan': '', 'Nama_Pemil': '', 'NO_HP': '', 'Stus_Usaha': '', });
lyr_Rumah_Sendiri_13.set('fieldImages', {'Id': '', 'No_Rumah': '', 'Jenis_Lant': '', 'Nama_KK': '', 'Pekerjaan': '', 'No_KTP': '', 'NO_KK': '', 'Jlh_Laki': '', 'Jlh_Wnta': '', 'Sts_Kepemi': '', 'Jns_Bgunan': '', 'Pddk_trkhr': '', });
lyr_Ruko_14.set('fieldImages', {'Id': '', 'Pemilik': '', 'Kontak': '', 'Jenis_Usah': '', 'STTS': '', 'Luas_BGN': '', 'Luas_LHN': '', });
lyr_Rumah_15.set('fieldImages', {'Id': '', 'Lebar': '', 'No_rumah': '', 'Sts_Kepemi': '', 'Jns_bgnn': '', 'Jns_lntai': '', 'Nama_kk': '', 'Pdd_trkhir': '', 'Jlh_Laki': '', 'Jlh_Wnita': '', 'Ttl_Hunian': '', 'NO_KTP': '', 'NO_Telp': '', });
lyr_Pasar_16.set('fieldImages', {'Id': '', 'Pemilik': '', 'Kontak': '', 'JNS_Usaha': '', 'Status': '', 'Luas_Bang': '', });
lyr_Mesjid_17.set('fieldImages', {'Id': '', 'Luas_msjd': '', 'Nm_Mesjid': '', 'Luas_Lahan': '', 'NM_Imum': '', 'No_Kontak': '', });
lyr_Lhn_Parkir_18.set('fieldImages', {'Id': '', 'Nama_tmpt': '', 'Luas': '', });
lyr_Lapangan_19.set('fieldImages', {'Id': '', 'NM_Pemilik': '', 'NO_Kontak': '', 'JNS_KEG': '', 'Luas_Lahan': '', 'Luas': '', 'Luas_BGNN': '', });
lyr_Lahan_Kosong_20.set('fieldImages', {'Id': '', 'NM_Pemilik': '', 'Kontak': '', 'JNS_TNMN': '', 'PRDKS_JLH_': '', 'JNS_Irigas': '', 'Luas_Lahan': '', 'Status': '', });
lyr_Sungai_21.set('fieldImages', {'Id': '', 'Nm_Sungai': '', 'Pjg_sungai': '', });
lyr_Lorong_22.set('fieldImages', {'Id': '', 'Nama_Lrg': '', 'Panjang_lr': '', 'Lebar_lr': '', 'Status_Lrg': '', 'Kondisi_Lr': '', 'Kategori_L': '', 'Pembiayaan': '', 'Thn_Perbai': '', });
lyr_Got_23.set('fieldImages', {'Id': '', 'Pjg_Got': '', 'Lbr_Got': '', });
lyr_Jalan_24.set('fieldImages', {'Id': '', 'Nama_Jalan': '', 'Pjg_Jalan': '', 'Lbr_jalan': '', 'Status_Jal': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'Thn_perbai': '', });
lyr_Gang_25.set('fieldImages', {'Id': '', 'Nama_GG': '', 'Panjang_GG': '', 'Lebar_GG': '', 'Status_GG': '', 'Kategori_G': '', 'Pembiayaan': '', 'Tahun_Perb': '', });
lyr_tambak5tambak4_26.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_rumah5rumah4_27.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_ruko5ruko1_28.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_pasar5pasar1_29.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_mesjid5mesjid1_30.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_lapangan5lapangan4_31.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_lahankosong5lahankosong4_32.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_kuburan5kuburan1_33.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_kolam5kolam1_34.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_kantor5kantor1_35.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_gudang5gudang1_36.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_gedungsekolah5gedungsekolah1_37.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_doorsmeer5doorsmeer1_38.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_Batas_wilayah_39.set('fieldImages', {'Id': '', });
lyr_Batas_Gampong_40.set('fieldImages', {'Id': '', 'Meter': '', });
lyr_bengkel5bengkel1_41.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_kuburan_1.set('fieldLabels', {'Id': 'no label', 'NM_Pemilik': 'no label', 'NO_Kontak': 'no label', 'Luas_Lahan': 'no label', });
lyr_Kolam_2.set('fieldLabels', {'Id': 'no label', 'Pemilik': 'no label', 'Kontak': 'no label', 'Jenis_Ikan': 'no label', 'Jenis_Usah': 'no label', });
lyr_kios_kedai_3.set('fieldLabels', {'Id': 'no label', 'NM_Pmlik': 'no label', 'NO_Kontak': 'no label', 'JNIS_usaha': 'no label', 'Stts': 'no label', 'Luas': 'no label', 'luas_lahan': 'no label', });
lyr_Kantor_4.set('fieldLabels', {'Id': 'no label', 'NM_Kantor': 'no label', 'NMKPL_KNTR': 'no label', 'NO_Kontak': 'no label', 'Luas_BGNN': 'no label', 'Luas_Tanah': 'no label', });
lyr_kandang_5.set('fieldLabels', {'Id': 'no label', 'pemilik': 'no label', 'kontak': 'no label', 'JNS_usaha': 'no label', 'Luas_BGNN': 'no label', 'Luas_LHN': 'no label', });
lyr_Gudang_6.set('fieldLabels', {'Id': 'no label', 'Pemilik': 'no label', 'Nama_Gudan': 'no label', 'Status': 'no label', 'Luas': 'no label', });
lyr_Gedung_Sekolah_7.set('fieldLabels', {'Id': 'no label', 'Nama_SKLH': 'no label', 'NM_KEPSEK': 'no label', 'NO_HP': 'no label', 'Luas_BGNN': 'no label', 'LUAS_LHN': 'no label', });
lyr_Doorsmeer_8.set('fieldLabels', {'Id': 'no label', 'NM_Doorsme': 'no label', 'Pemilik': 'no label', 'Luas': 'no label', });
lyr_Bengkel_9.set('fieldLabels', {'Id': 'no label', 'Pemilik': 'no label', 'Kontak': 'no label', 'Jenis': 'no label', 'Status': 'no label', 'Luas': 'no label', });
lyr_Tambak_10.set('fieldLabels', {'Id': 'no label', });
lyr_Rumah_11.set('fieldLabels', {'Id': 'no label', 'Nama_pemil': 'no label', 'luas': 'no label', });
lyr_Tambak_12.set('fieldLabels', {'Id': 'no label', 'Lebar': 'no label', 'Luas_Bangu': 'no label', 'Jenis_Ikan': 'no label', 'Nama_Pemil': 'no label', 'NO_HP': 'no label', 'Stus_Usaha': 'no label', });
lyr_Rumah_Sendiri_13.set('fieldLabels', {'Id': 'no label', 'No_Rumah': 'no label', 'Jenis_Lant': 'no label', 'Nama_KK': 'no label', 'Pekerjaan': 'no label', 'No_KTP': 'no label', 'NO_KK': 'no label', 'Jlh_Laki': 'no label', 'Jlh_Wnta': 'no label', 'Sts_Kepemi': 'no label', 'Jns_Bgunan': 'no label', 'Pddk_trkhr': 'no label', });
lyr_Ruko_14.set('fieldLabels', {'Id': 'no label', 'Pemilik': 'no label', 'Kontak': 'no label', 'Jenis_Usah': 'no label', 'STTS': 'no label', 'Luas_BGN': 'no label', 'Luas_LHN': 'no label', });
lyr_Rumah_15.set('fieldLabels', {'Id': 'no label', 'Lebar': 'no label', 'No_rumah': 'no label', 'Sts_Kepemi': 'no label', 'Jns_bgnn': 'no label', 'Jns_lntai': 'no label', 'Nama_kk': 'no label', 'Pdd_trkhir': 'no label', 'Jlh_Laki': 'no label', 'Jlh_Wnita': 'no label', 'Ttl_Hunian': 'no label', 'NO_KTP': 'no label', 'NO_Telp': 'no label', });
lyr_Pasar_16.set('fieldLabels', {'Id': 'no label', 'Pemilik': 'no label', 'Kontak': 'no label', 'JNS_Usaha': 'no label', 'Status': 'no label', 'Luas_Bang': 'no label', });
lyr_Mesjid_17.set('fieldLabels', {'Id': 'no label', 'Luas_msjd': 'no label', 'Nm_Mesjid': 'no label', 'Luas_Lahan': 'no label', 'NM_Imum': 'no label', 'No_Kontak': 'no label', });
lyr_Lhn_Parkir_18.set('fieldLabels', {'Id': 'no label', 'Nama_tmpt': 'no label', 'Luas': 'no label', });
lyr_Lapangan_19.set('fieldLabels', {'Id': 'no label', 'NM_Pemilik': 'no label', 'NO_Kontak': 'no label', 'JNS_KEG': 'no label', 'Luas_Lahan': 'no label', 'Luas': 'no label', 'Luas_BGNN': 'no label', });
lyr_Lahan_Kosong_20.set('fieldLabels', {'Id': 'no label', 'NM_Pemilik': 'no label', 'Kontak': 'no label', 'JNS_TNMN': 'no label', 'PRDKS_JLH_': 'no label', 'JNS_Irigas': 'no label', 'Luas_Lahan': 'no label', 'Status': 'no label', });
lyr_Sungai_21.set('fieldLabels', {'Id': 'no label', 'Nm_Sungai': 'no label', 'Pjg_sungai': 'no label', });
lyr_Lorong_22.set('fieldLabels', {'Id': 'no label', 'Nama_Lrg': 'no label', 'Panjang_lr': 'no label', 'Lebar_lr': 'no label', 'Status_Lrg': 'no label', 'Kondisi_Lr': 'no label', 'Kategori_L': 'no label', 'Pembiayaan': 'no label', 'Thn_Perbai': 'no label', });
lyr_Got_23.set('fieldLabels', {'Id': 'no label', 'Pjg_Got': 'no label', 'Lbr_Got': 'no label', });
lyr_Jalan_24.set('fieldLabels', {'Id': 'no label', 'Nama_Jalan': 'no label', 'Pjg_Jalan': 'no label', 'Lbr_jalan': 'no label', 'Status_Jal': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'Thn_perbai': 'no label', });
lyr_Gang_25.set('fieldLabels', {'Id': 'no label', 'Nama_GG': 'no label', 'Panjang_GG': 'no label', 'Lebar_GG': 'no label', 'Status_GG': 'no label', 'Kategori_G': 'no label', 'Pembiayaan': 'no label', 'Tahun_Perb': 'no label', });
lyr_tambak5tambak4_26.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_rumah5rumah4_27.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_ruko5ruko1_28.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_pasar5pasar1_29.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_mesjid5mesjid1_30.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_lapangan5lapangan4_31.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_lahankosong5lahankosong4_32.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_kuburan5kuburan1_33.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_kolam5kolam1_34.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_kantor5kantor1_35.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_gudang5gudang1_36.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_gedungsekolah5gedungsekolah1_37.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_doorsmeer5doorsmeer1_38.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Batas_wilayah_39.set('fieldLabels', {'Id': 'no label', });
lyr_Batas_Gampong_40.set('fieldLabels', {'Id': 'no label', 'Meter': 'no label', });
lyr_bengkel5bengkel1_41.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_bengkel5bengkel1_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});