
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"317",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"actionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"packages"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"services"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"selection.packages"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"package"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"service"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"selection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var build_ecommerce={\"ecommerce\":{}};if(",["escape",["macro",4],8,16],"===\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"step1\"||",["escape",["macro",4],8,16],"===\"System Response\"\u0026\u0026",["escape",["macro",5],8,16],"===\"Quotation\"){var packages=",["escape",["macro",6],8,16],";var impressions=[];var detail={\"actionField\":{\"list\":\"Search Results\"},\"products\":[]};var currencyCode=",["escape",["macro",7],8,16],";for(var id in packages){var ecommerce_package={};ecommerce_package.name=packages[id].products[0].product;ecommerce_package.id=packages[id].products[0].id;\necommerce_package.price=packages[id].priceInRateCurrency.gross;ecommerce_package.brand=packages[id].products[0].property;ecommerce_package.category=packages[id].products[0].type;ecommerce_package.variant=packages[id].products[0].rate;ecommerce_package.list=\"Search Results\";ecommerce_package.position=packages[id].position;var packagesproducts=packages[id].products;for(var idmeal in packagesproducts){var ecommerce_mealpackage={};var packagesproductstype=packagesproducts[idmeal].type;if(packagesproductstype===\n\"meal\"){ecommerce_mealpackage.name=packagesproducts[idmeal].product;ecommerce_mealpackage.id=packagesproducts[idmeal].id;ecommerce_mealpackage.price=packagesproducts[idmeal].price.grossInRateCurrency;ecommerce_mealpackage.brand=packagesproducts[idmeal].property;ecommerce_mealpackage.category=packagesproducts[idmeal].type;ecommerce_mealpackage.variant=packagesproducts[idmeal].rate;ecommerce_mealpackage.list=\"Search Results\";impressions.push(ecommerce_mealpackage);detail.products.push(ecommerce_mealpackage)}}impressions.push(ecommerce_package);\ndetail.products.push(ecommerce_package)}build_ecommerce.ecommerce.currencyCode=currencyCode;build_ecommerce.ecommerce.impressions=impressions;build_ecommerce.ecommerce.detail=detail}else if(",["escape",["macro",4],8,16],"===\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"step2\"){var services=",["escape",["macro",8],8,16],";var impressions=[];var detail={\"actionField\":{\"list\":\"Extras Selection\"},\"products\":[]};var currencyCode=",["escape",["macro",7],8,16],";for(var id in services){var ecommerce_service={};ecommerce_service.name=services[id].product;\necommerce_service.id=services[id].id;ecommerce_service.price=services[id].price.grossInRateCurrency;ecommerce_service.brand=services[id].property;ecommerce_service.category=services[id].type;ecommerce_service.variant=services[id].rate;ecommerce_service.list=\"Extras Selection\";ecommerce_service.position=services[id].position;impressions.push(ecommerce_service);detail.products.push(ecommerce_service)}build_ecommerce.ecommerce.currencyCode=currencyCode;build_ecommerce.ecommerce.impressions=impressions;\nbuild_ecommerce.ecommerce.detail=detail}else if(",["escape",["macro",4],8,16],"===\"Action Trackings\"\u0026\u0026(",["escape",["macro",5],8,16],"===\"AddPackage\"||",["escape",["macro",5],8,16],"===\"RemovePackage\")){var actionId=",["escape",["macro",5],8,16],";var products=[];if(actionId===\"AddPackage\"){var selectionpackageswhole=",["escape",["macro",9],8,16],";var tmpArray1=selectionpackageswhole;var selectionpackages=tmpArray1[tmpArray1.length-1];var selectionpackagessubpack=selectionpackages[\"package\"];for(var packageid in selectionpackagessubpack){var tmpItem=\n{};tmpItem.name=selectionpackagessubpack[packageid].product;tmpItem.category=selectionpackagessubpack[packageid].type;tmpItem.price=selectionpackagessubpack[packageid].prices.grossInRateCurrency;tmpItem.tax=selectionpackagessubpack[packageid].prices.grossInRateCurrency-selectionpackagessubpack[packageid].prices.netInRateCurrency;tmpItem.brand=selectionpackagessubpack[packageid].property;tmpItem.variant=selectionpackagessubpack[packageid].rate;tmpItem.id=tmpItem.brand+\"::\"+tmpItem.variant+\"::\"+tmpItem.category+\n\"::\"+tmpItem.name;tmpItem.quantity=1;products.push(tmpItem)}var build_ecommerce={\"event\":\"addToCart\",\"ecommerce\":{}};var currencyCode=",["escape",["macro",7],8,16],";build_ecommerce.ecommerce.currencyCode=selectionpackagessubpack[0].currency;build_ecommerce.ecommerce.add={};build_ecommerce.ecommerce.add.products=products}else{var packageremoved=",["escape",["macro",10],8,16],";var tmpItem={};tmpItem.name=packageremoved.products[0].product;tmpItem.category=packageremoved.products[0].type;tmpItem.price=packageremoved.products[0].price.grossInRateCurrency;\ntmpItem.tax=packageremoved.products[0].price.grossInRateCurrency-packageremoved.products[0].price.netInRateCurrency;tmpItem.brand=packageremoved.products[0].property;tmpItem.variant=packageremoved.products[0].rate;tmpItem.id=tmpItem.brand+\"::\"+tmpItem.variant+\"::\"+tmpItem.category+\"::\"+tmpItem.name;tmpItem.quantity=1;products.push(tmpItem);var build_ecommerce={\"event\":\"removeFromCart\",\"ecommerce\":{}};build_ecommerce.ecommerce.remove={};build_ecommerce.ecommerce.remove.products=products}}else if(",["escape",["macro",4],8,16],"===\n\"Action Trackings\"\u0026\u0026(",["escape",["macro",5],8,16],"===\"AddService\"||",["escape",["macro",5],8,16],"===\"RemoveService\")){var services=",["escape",["macro",11],8,16],";var actionId=",["escape",["macro",5],8,16],";var products=[];var tmpItem={};tmpItem.name=services.product;tmpItem.id=services.id;tmpItem.category=services.type;tmpItem.price=services.price.grossInRateCurrency;tmpItem.tax=services.price.grossInRateCurrency-services.price.netInRateCurrency;tmpItem.brand=services.property;tmpItem.variant=services.rate;tmpItem.quantity=1;products.push(tmpItem);\nif(actionId===\"AddService\"){var build_ecommerce={\"event\":\"addToCart\",\"ecommerce\":{}};var currencyCode=",["escape",["macro",7],8,16],";build_ecommerce.ecommerce.currencyCode=currencyCode;build_ecommerce.ecommerce.add={};build_ecommerce.ecommerce.add.products=products}else{var build_ecommerce={\"event\":\"removeFromCart\",\"ecommerce\":{}};build_ecommerce.ecommerce.remove={};build_ecommerce.ecommerce.remove.products=products}}else if(",["escape",["macro",4],8,16],"===\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"step3\"){var build_ecommerce=\n{\"event\":\"checkout\",\"ecommerce\":{}};var selection=",["escape",["macro",12],8,16],";var packages=[];var packageList=selection.packages;for(var id in packageList)for(var subpack in packageList[id][\"package\"]){var ecommerce_package={};ecommerce_package.name=packageList[id][\"package\"][subpack].product;ecommerce_package.id=packageList[id][\"package\"][subpack].property+\"::\"+packageList[id][\"package\"][subpack].rate+\"::\"+packageList[id][\"package\"][subpack].type+\"::\"+packageList[id][\"package\"][subpack].product;ecommerce_package.category=\npackageList[id][\"package\"][subpack].type;ecommerce_package.price=packageList[id][\"package\"][subpack].prices.grossInRateCurrency;ecommerce_package.tax=packageList[id][\"package\"][subpack].prices.grossInRateCurrency-packageList[id][\"package\"][subpack].prices.netInRateCurrency;ecommerce_package.brand=packageList[id][\"package\"][subpack].property;ecommerce_package.variant=packageList[id][\"package\"][subpack].rate;ecommerce_package.quantity=1;packages.push(ecommerce_package)}if(selection.services[0]){var serviceList=\nselection.services;for(var id in serviceList)for(var subserv in serviceList[id].service){var ecommerce_service={};ecommerce_service.name=serviceList[id].service[subserv].product;ecommerce_service.id=serviceList[id].service[subserv].property+\"::\"+serviceList[id].service[subserv].rate+\"::\"+serviceList[id].service[subserv].type+\"::\"+serviceList[id].service[subserv].product;ecommerce_service.category=serviceList[id].service[subserv].type;ecommerce_service.price=serviceList[id].service[subserv].prices.grossInRateCurrency;\necommerce_service.tax=serviceList[id].service[subserv].prices.grossInRateCurrency-serviceList[id].service[subserv].prices.netInRateCurrency;ecommerce_service.brand=serviceList[id].service[subserv].property;ecommerce_service.variant=serviceList[id].service[subserv].rate;ecommerce_service.quantity=1;packages.push(ecommerce_service)}}build_ecommerce.ecommerce.checkout={};build_ecommerce.ecommerce.checkout.actionField={\"step\":1};build_ecommerce.ecommerce.checkout.products=packages}else if(",["escape",["macro",4],8,16],"===\n\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"step4\"){var booking=",["escape",["macro",13],8,16],";var products=[];var packages=booking.details.packages;for(var id in packages){var ecommerce_package={};ecommerce_package.name=packages[id].accommodation.product;ecommerce_package.id=booking.property+\"::\"+packages[id].rate+\"::accommodation::\"+packages[id].accommodation.product;ecommerce_package.category=\"accommodation\";ecommerce_package.price=packages[id].price;ecommerce_package.brand=booking.property;ecommerce_package.variant=\npackages[id].rate;ecommerce_package.quantity=1;products.push(ecommerce_package)}var services=booking.details.services;for(var id in services){var ecommerce_service={};ecommerce_service.name=services[id].product;ecommerce_service.id=booking.property+\"::\"+services[id].rate+\"::\"+services[id].type+\"::\"+services[id].product;ecommerce_service.category=services[id].type;ecommerce_service.price=services[id].prices.gross;ecommerce_service.tax=services[id].prices.gross-services[id].prices.net;ecommerce_service.brand=\nbooking.property;ecommerce_service.variant=services[id].rate;ecommerce_service.quantity=1;products.push(ecommerce_service)}build_ecommerce.ecommerce={\"currencyCode\":booking.currency};build_ecommerce.ecommerce.purchase={};build_ecommerce.ecommerce.purchase.actionField={\"id\":booking.confirmation,\"affiliation\":\"ATTRACTION Booking Engine\",\"revenue\":booking.totalPrice,\"tax\":booking.totalTaxes,\"shipping\":\"0\",\"coupon\":booking.accessCode};build_ecommerce.ecommerce.purchase.products=products}else if(",["escape",["macro",4],8,16],"===\n\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"cancel-confirmation\"){var booking=",["escape",["macro",13],8,16],";build_ecommerce.ecommerce={\"refund\":{\"actionField\":{\"id\":booking.confirmation}}}}return build_ecommerce})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=",["escape",["macro",13],8,16],";if(b\u0026\u0026b.totalPrice)return b.totalPrice;if(a){b=a.packages;a=a.services;var c=0,d;for(d in b)c+=b[d][\"package\"][0].prices.grossInRateCurrency;for(var e in a)c+=a[e].service[0].prices.grossInRateCurrency;return c}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quicksearch"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",16],8,16],",c=a.adults;a=a.children;var b=0,d;for(d in c)b+=c[d];for(var e in a)b+=a[e];return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quicksearch.rooms"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quicksearch.nights"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;var d=0,e;for(e in a){var b=a[e][\"package\"][0].prices.taxes.types,c;for(c in b)\"local-tax\"===b[c].label\u0026\u0026(d+=b[c].amount)}return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",16],8,16],";a=a.adults;var b=0,c;for(c in a)b+=a[c];return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",16],8,16],";a=a.children;var b=0,c;for(c in a)b+=a[c];return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.group"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",24],
      "vtp_defaultValue":"Individual hotel",
      "vtp_map":["list",["map","key",["macro",24],"value",["macro",24]],["map","key","undefined","value","Individual hotel"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"display.locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"display.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.location.city"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.location.country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.location.timezone"
    },{
      "function":"__f",
      "vtp_component":"QUERY",
      "vtp_queryKey":"FSTBKNGTrackLink"
    },{
      "function":"__f",
      "vtp_stripWww":false,
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quicksearch.arrival"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.hid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $fb.abTesting.getCurrentSession()\u0026\u0026$fb.abTesting.getCurrentSession().test})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $fb.abTesting.getCurrentSession()\u0026\u0026$fb.abTesting.getCurrentSession().allocation})();"]
    },{
      "function":"__f",
      "vtp_component":"QUERY",
      "vtp_queryKey":"from"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $fb.abTesting.isCurrentSession(\"fb-ghs-xxx\",\"variation\")?\"variation view\":\"original view\"})();"]
    },{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",41],
      "vtp_map":["list",["map","key","crs_frontend-staging-rc.fastbooking.ch","value","UA-66526002-1"],["map","key","book-secure.com","value","UA-66526002-2"],["map","key","crs_frontend-rc.version.fastbooking.ch","value","UA-66526002-5"],["map","key","attraction.staging.fastbooking.io","value","UA-66526002-1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.clientGaId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.clientGaClassic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.websiteUrl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"properties"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",46],8,16],";return a[0].tracking.websiteUrl})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(null!=",["escape",["macro",45],8,16],"){var a=",["escape",["macro",45],8,16],";a=\"book-secure.com,fastbooking.com,\"+a}else null!=",["escape",["macro",47],8,16],"?(a=",["escape",["macro",47],8,16],",a=\"book-secure.com,fastbooking.com,\"+a):a=\"book-secure.com,fastbooking.com\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var build_ecommerce={\"ecommerce\":{}};if(",["escape",["macro",4],8,16],"===\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"step1\"||",["escape",["macro",4],8,16],"===\"System Response\"\u0026\u0026",["escape",["macro",5],8,16],"===\"Quotation\"){var packages=",["escape",["macro",6],8,16],";var impressions=[];var detail={\"actionField\":{\"list\":\"Search Results\"},\"products\":[]};var currencyCode=",["escape",["macro",7],8,16],";for(var id in packages){var ecommerce_package={};ecommerce_package.name=packages[id].products[0].product;ecommerce_package.id=packages[id].products[0].id;\necommerce_package.price=packages[id].priceInRateCurrency.gross;ecommerce_package.brand=packages[id].products[0].property;ecommerce_package.category=packages[id].products[0].type;ecommerce_package.variant=packages[id].products[0].rate;ecommerce_package.list=\"Search Results\";ecommerce_package.position=packages[id].position;var packagesproducts=packages[id].products;for(var idmeal in packagesproducts){var ecommerce_mealpackage={};var packagesproductstype=packagesproducts[idmeal].type;if(packagesproductstype===\n\"meal\"){ecommerce_mealpackage.name=packagesproducts[idmeal].product;ecommerce_mealpackage.id=packagesproducts[idmeal].id;ecommerce_mealpackage.price=packagesproducts[idmeal].price.grossInRateCurrency;ecommerce_mealpackage.brand=packagesproducts[idmeal].property;ecommerce_mealpackage.category=packagesproducts[idmeal].type;ecommerce_mealpackage.variant=packagesproducts[idmeal].rate;ecommerce_mealpackage.list=\"Search Results\";impressions.push(ecommerce_mealpackage);detail.products.push(ecommerce_mealpackage)}}impressions.push(ecommerce_package);\ndetail.products.push(ecommerce_package);var strecommerce=JSON.stringify(impressions);if(strecommerce.length\u003E3300)break}build_ecommerce.ecommerce.currencyCode=currencyCode;build_ecommerce.ecommerce.impressions=impressions;build_ecommerce.ecommerce.detail=detail}else if(",["escape",["macro",4],8,16],"===\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"step2\"){var services=",["escape",["macro",8],8,16],";var impressions=[];var detail={\"actionField\":{\"list\":\"Extras Selection\"},\"products\":[]};var currencyCode=",["escape",["macro",7],8,16],";for(var id in services){var ecommerce_service=\n{};ecommerce_service.name=services[id].product;ecommerce_service.id=services[id].id;ecommerce_service.price=services[id].price.grossInRateCurrency;ecommerce_service.brand=services[id].property;ecommerce_service.category=services[id].type;ecommerce_service.variant=services[id].rate;ecommerce_service.list=\"Extras Selection\";ecommerce_service.position=services[id].position;impressions.push(ecommerce_service);detail.products.push(ecommerce_service)}build_ecommerce.ecommerce.currencyCode=currencyCode;\nbuild_ecommerce.ecommerce.impressions=impressions;build_ecommerce.ecommerce.detail=detail}else if(",["escape",["macro",4],8,16],"===\"Action Trackings\"\u0026\u0026(",["escape",["macro",5],8,16],"===\"AddPackage\"||",["escape",["macro",5],8,16],"===\"RemovePackage\")){var actionId=",["escape",["macro",5],8,16],";var products=[];if(actionId===\"AddPackage\"){var selectionpackageswhole=",["escape",["macro",9],8,16],";var tmpArray1=selectionpackageswhole;var selectionpackages=tmpArray1[tmpArray1.length-1];var selectionpackagessubpack=selectionpackages[\"package\"];\nfor(var packageid in selectionpackagessubpack){var tmpItem={};tmpItem.name=selectionpackagessubpack[packageid].product;tmpItem.category=selectionpackagessubpack[packageid].type;tmpItem.price=selectionpackagessubpack[packageid].prices.grossInRateCurrency;tmpItem.tax=selectionpackagessubpack[packageid].prices.grossInRateCurrency-selectionpackagessubpack[packageid].prices.netInRateCurrency;tmpItem.brand=selectionpackagessubpack[packageid].property;tmpItem.variant=selectionpackagessubpack[packageid].rate;\ntmpItem.id=tmpItem.brand+\"::\"+tmpItem.variant+\"::\"+tmpItem.category+\"::\"+tmpItem.name;tmpItem.quantity=1;products.push(tmpItem)}var build_ecommerce={\"event\":\"addToCart\",\"ecommerce\":{}};var currencyCode=",["escape",["macro",7],8,16],";build_ecommerce.ecommerce.currencyCode=selectionpackagessubpack[0].currency;build_ecommerce.ecommerce.add={};build_ecommerce.ecommerce.add.products=products}else{var packageremoved=",["escape",["macro",10],8,16],";var tmpItem={};tmpItem.name=packageremoved.products[0].product;tmpItem.category=\npackageremoved.products[0].type;tmpItem.price=packageremoved.products[0].price.grossInRateCurrency;tmpItem.tax=packageremoved.products[0].price.grossInRateCurrency-packageremoved.products[0].price.netInRateCurrency;tmpItem.brand=packageremoved.products[0].property;tmpItem.variant=packageremoved.products[0].rate;tmpItem.id=tmpItem.brand+\"::\"+tmpItem.variant+\"::\"+tmpItem.category+\"::\"+tmpItem.name;tmpItem.quantity=1;products.push(tmpItem);var build_ecommerce={\"event\":\"removeFromCart\",\"ecommerce\":{}};\nbuild_ecommerce.ecommerce.remove={};build_ecommerce.ecommerce.remove.products=products}}else if(",["escape",["macro",4],8,16],"===\"Action Trackings\"\u0026\u0026(",["escape",["macro",5],8,16],"===\"AddService\"||",["escape",["macro",5],8,16],"===\"RemoveService\")){var services=",["escape",["macro",11],8,16],";var actionId=",["escape",["macro",5],8,16],";var products=[];var tmpItem={};tmpItem.name=services.product;tmpItem.id=services.id;tmpItem.category=services.type;tmpItem.price=services.price.grossInRateCurrency;tmpItem.tax=services.price.grossInRateCurrency-\nservices.price.netInRateCurrency;tmpItem.brand=services.property;tmpItem.variant=services.rate;tmpItem.quantity=1;products.push(tmpItem);if(actionId===\"AddService\"){var build_ecommerce={\"event\":\"addToCart\",\"ecommerce\":{}};var currencyCode=",["escape",["macro",7],8,16],";build_ecommerce.ecommerce.currencyCode=currencyCode;build_ecommerce.ecommerce.add={};build_ecommerce.ecommerce.add.products=products}else{var build_ecommerce={\"event\":\"removeFromCart\",\"ecommerce\":{}};build_ecommerce.ecommerce.remove={};build_ecommerce.ecommerce.remove.products=\nproducts}}else if(",["escape",["macro",4],8,16],"===\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"step3\"){var build_ecommerce={\"event\":\"checkout\",\"ecommerce\":{}};var selection=",["escape",["macro",12],8,16],";var packages=[];var packageList=selection.packages;for(var id in packageList)for(var subpack in packageList[id][\"package\"]){var ecommerce_package={};ecommerce_package.name=packageList[id][\"package\"][subpack].product;ecommerce_package.id=packageList[id][\"package\"][subpack].property+\"::\"+packageList[id][\"package\"][subpack].rate+\n\"::\"+packageList[id][\"package\"][subpack].type+\"::\"+packageList[id][\"package\"][subpack].product;ecommerce_package.category=packageList[id][\"package\"][subpack].type;ecommerce_package.price=packageList[id][\"package\"][subpack].prices.grossInRateCurrency;ecommerce_package.tax=packageList[id][\"package\"][subpack].prices.grossInRateCurrency-packageList[id][\"package\"][subpack].prices.netInRateCurrency;ecommerce_package.brand=packageList[id][\"package\"][subpack].property;ecommerce_package.variant=packageList[id][\"package\"][subpack].rate;\necommerce_package.quantity=1;packages.push(ecommerce_package)}if(selection.services[0]){var serviceList=selection.services;for(var id in serviceList)for(var subserv in serviceList[id].service){var ecommerce_service={};ecommerce_service.name=serviceList[id].service[subserv].product;ecommerce_service.id=serviceList[id].service[subserv].property+\"::\"+serviceList[id].service[subserv].rate+\"::\"+serviceList[id].service[subserv].type+\"::\"+serviceList[id].service[subserv].product;ecommerce_service.category=\nserviceList[id].service[subserv].type;ecommerce_service.price=serviceList[id].service[subserv].prices.grossInRateCurrency;ecommerce_service.tax=serviceList[id].service[subserv].prices.grossInRateCurrency-serviceList[id].service[subserv].prices.netInRateCurrency;ecommerce_service.brand=serviceList[id].service[subserv].property;ecommerce_service.variant=serviceList[id].service[subserv].rate;ecommerce_service.quantity=1;packages.push(ecommerce_service)}}build_ecommerce.ecommerce.checkout={};build_ecommerce.ecommerce.checkout.actionField=\n{\"step\":1};build_ecommerce.ecommerce.checkout.products=packages}else if(",["escape",["macro",4],8,16],"===\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"step4\"){var booking=",["escape",["macro",13],8,16],";var products=[];var packages=booking.details.packages;for(var id in packages){var ecommerce_package={};ecommerce_package.name=packages[id].accommodation.product;ecommerce_package.id=booking.property+\"::\"+packages[id].rate+\"::accommodation::\"+packages[id].accommodation.product;ecommerce_package.category=\"accommodation\";ecommerce_package.price=\npackages[id].price;ecommerce_package.brand=booking.property;ecommerce_package.variant=packages[id].rate;ecommerce_package.quantity=1;products.push(ecommerce_package)}var services=booking.details.services;for(var id in services){var ecommerce_service={};ecommerce_service.name=services[id].product;ecommerce_service.id=booking.property+\"::\"+services[id].rate+\"::\"+services[id].type+\"::\"+services[id].product;ecommerce_service.category=services[id].type;ecommerce_service.price=services[id].prices.gross;\necommerce_service.tax=services[id].prices.gross-services[id].prices.net;ecommerce_service.brand=booking.property;ecommerce_service.variant=services[id].rate;ecommerce_service.quantity=1;products.push(ecommerce_service)}build_ecommerce.ecommerce={\"currencyCode\":booking.currency};build_ecommerce.ecommerce.purchase={};build_ecommerce.ecommerce.purchase.actionField={\"id\":booking.confirmation,\"affiliation\":\"ATTRACTION Booking Engine\",\"revenue\":booking.totalPrice,\"tax\":booking.totalTaxes,\"shipping\":\"0\",\n\"coupon\":booking.accessCode};build_ecommerce.ecommerce.purchase.products=products}else if(",["escape",["macro",4],8,16],"===\"Pageview\"\u0026\u0026",["escape",["macro",5],8,16],"===\"cancel-confirmation\"){var booking=",["escape",["macro",13],8,16],";build_ecommerce.ecommerce={\"refund\":{\"actionField\":{\"id\":booking.confirmation}}}}return build_ecommerce})();"]
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.veiId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",51],8,16],";a=a.replace(\/\\-\/g,\"\/\");return\"jp\"==",["escape",["macro",35],8,16],".substring(0,2)?\"\/\/configjp2.veinteractive.com\/tags\/\"+a+\"\/tag.js\":\"kr\"==",["escape",["macro",35],8,16],".substring(0,2)?\"\/\/configch2.veinteractive.com\/tags\/\"+a+\"\/tag.js\":\"\/\/config1.veinteractive.com\/tags\/\"+a+\"\/tag.js\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"jp\"==",["escape",["macro",35],8,16],".substring(0,2)?\"\/\/cdsjp2.veinteractive.com\/DataReceiverService.asmx\/Pixel?journeycode\\x3d\"+",["escape",["macro",51],8,16],":\"kr\"==",["escape",["macro",35],8,16],".substring(0,2)?\"\/\/cdsch2.veinteractive.com\/DataReceiverService.asmx\/Pixel?journeycode\\x3d\"+",["escape",["macro",51],8,16],":\"\/\/drs2.veinteractive.com\/DataReceiverService.asmx\/Pixel?journeycode\\x3d\"+",["escape",["macro",51],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.webPackGaId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.webPackGaClassic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.adRollAdvertisableId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.adRollPixelId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.equaeroCustomerId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var selection=",["escape",["macro",12],8,16],";var booking=",["escape",["macro",13],8,16],";if(booking\u0026\u0026booking.currency)return booking.currency;else return property.currency;return undefined})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.confirmation"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.googleAdWordsConversionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.googleAdWordsConversionLabel"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.googleAdWordsRemarketingConversionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.googleAdWordsRemarketingConversionLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.groupGaId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.groupGaClassic"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"fclid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.checkin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.checkout"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.totalAdult"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.totalChild"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",72],8,16],"+",["escape",["macro",73],8,16],";return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.accommodations"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",75],8,16],".length})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"runtimeContext.phpVersion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"runtimeContext.serverLocation"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"transactionsFB"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",60],8,16],"){var a=",["escape",["macro",60],8,16],";if(",["escape",["macro",79],8,16],"){var b=",["escape",["macro",79],8,16],".split(\"|\");if(-1\u003Cb.indexOf(a))return\"blockTransaction\"}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",60],8,16],")return function(){var a=",["escape",["macro",60],8,16],";if(",["escape",["macro",79],8,16],"){var b=",["escape",["macro",79],8,16],".split(\"|\");-1==b.indexOf(a)\u0026\u0026(b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactionsFB\\x3d\"+b.join(\"|\")+\"; \"+a)}else b=[],b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactionsFB\\x3d\"+b.join(\"|\")+\"; \"+a}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"transactionsUAwebpack"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",60],8,16],"){var a=",["escape",["macro",60],8,16],";if(",["escape",["macro",82],8,16],"){var b=",["escape",["macro",82],8,16],".split(\"|\");if(-1\u003Cb.indexOf(a))return\"blockTransaction\"}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",60],8,16],")return function(){var a=",["escape",["macro",60],8,16],";if(",["escape",["macro",82],8,16],"){var b=",["escape",["macro",82],8,16],".split(\"|\");-1==b.indexOf(a)\u0026\u0026(b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactionsUAwebpack\\x3d\"+b.join(\"|\")+\"; \"+a)}else b=[],b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactionsUAwebpack\\x3d\"+b.join(\"|\")+\"; \"+a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.nights"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"transactionsUAhotel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",60],8,16],"){var a=",["escape",["macro",60],8,16],";if(",["escape",["macro",86],8,16],"){var b=",["escape",["macro",86],8,16],".split(\"|\");if(-1\u003Cb.indexOf(a))return\"blockTransaction\"}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",60],8,16],")return function(){var a=",["escape",["macro",60],8,16],";if(",["escape",["macro",86],8,16],"){var b=",["escape",["macro",86],8,16],".split(\"|\");-1==b.indexOf(a)\u0026\u0026(b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactionsUAhotel\\x3d\"+b.join(\"|\")+\"; \"+a)}else b=[],b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactionsUAhotel\\x3d\"+b.join(\"|\")+\"; \"+a}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"transactionsUAgroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",60],8,16],"){var a=",["escape",["macro",60],8,16],";if(",["escape",["macro",89],8,16],"){var b=",["escape",["macro",89],8,16],".split(\"|\");if(-1\u003Cb.indexOf(a))return\"blockTransaction\"}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",60],8,16],")return function(){var a=",["escape",["macro",60],8,16],";if(",["escape",["macro",89],8,16],"){var b=",["escape",["macro",89],8,16],".split(\"|\");-1==b.indexOf(a)\u0026\u0026(b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactionsUAgroup\\x3d\"+b.join(\"|\")+\"; \"+a)}else b=[],b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactionsUAgroup\\x3d\"+b.join(\"|\")+\"; \"+a}})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"kayakclickid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"kayakid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=0;",["escape",["macro",60],8,16],"===",["escape",["macro",94],8,16],"\u0026\u0026(a=1);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",46],8,16],";return a[0].tracking.groupGaId})();"]
    },{
      "function":"__k",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_decodeCookie":false,
      "vtp_name":"PageCount"
    },{
      "function":"__c",
      "vtp_value":"DEdgeGlobalAnalytics"
    },{
      "function":"__c",
      "vtp_value":"secure-hotel-booking.com,book-secure.com,mobile88.com,sogenactif.com,paypal.com,ogone.com,cybersource.com,hitrust.com.tw,faspay.co.id,lcl.fr,icscards.nl,dbs.com,ocbc.com,kapital24.uz,enstage-sas.com,dnp-cdms.jp,superghs.com,infinitium.com,maybank.com,standardchartered.com,95516.com,cimb.com,cimbsecuree-pay.com.sg,bangkokbank.com,doku.com,reddotpayment.com,ipay88.com.my,secure.amarishotel.com,secure.santika.com"
    },{
      "function":"__c",
      "vtp_value":"UA-148839870-2"
    },{
      "function":"__c",
      "vtp_value":"UA-148839870-3"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=14,d=[\"",["escape",["macro",100],7],"\",\"",["escape",["macro",101],7],"\"],e=\"_ga_originalSendHitTask\";return function(a){window[e]=window[e]||a.get(\"sendHitTask\");\"number\"===typeof c\u0026\u0026a.set(\"dimension\"+c,a.get(\"clientId\"));a.set(\"sendHitTask\",function(b){var a=b,f=window[e],c=!0;try{if(c\u0026\u0026f(b),\"undefined\"!==typeof d\u0026\u0026d.length){var g=b.get(\"hitPayload\"),h=new RegExp(b.get(\"trackingId\"),\"gi\");d.forEach(function(a){b.set(\"hitPayload\",g.replace(h,a),!0);c\u0026\u0026f(b)})}}catch(k){f(a)}})}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":"Other",
      "vtp_map":["list",["map","key","step0","value","DateSelection"],["map","key","step1","value","RoomSelection"],["map","key","step2","value","ExtraSelection"],["map","key","step3","value","PersonalInformation"],["map","key","step4","value","Confirmation"],["map","key","cancel","value","Modification"],["map","key","cancel-confirmation","value","Cancellation"],["map","key","step1-total-unavailability","value","DateSelection"],["map","key","step1-partial-unavailability","value","DateSelection"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quicksearch.departure"
    },{
      "function":"__c",
      "vtp_value":"UA-148839870-1"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_functionName":["macro",98],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",99],
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",102]],["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",21]],["map","index","2","metric",["macro",22]],["map","index","4","metric",["macro",19]],["map","index","5","metric",["macro",18]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","7","dimension",["macro",33]],["map","index","8","dimension",["macro",104]],["map","index","12","dimension",["macro",97]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",105],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{refund:{actionField:{id:\"",["escape",["macro",60],7],"\"}}}};return a})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":["macro",60]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",60],7],"\"===",["escape",["macro",108],8,16],"?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",12],8,16],",a=",["escape",["macro",13],8,16],";if(a\u0026\u0026a.hasOwnProperty(\"totalPrice\")\u0026\u0026a.hasOwnProperty(\"totalTaxes\"))return a.totalPrice-a.totalTaxes;if(b){a=b.packages;b=b.services;var c=0,d;for(d in a)c+=a[d][\"package\"][0].prices.netInRateCurrency;for(var e in b)c+=b[e].service[0].prices.netInRateCurrency;return c}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.accessCode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=",["escape",["macro",13],8,16],",e=[],b=d.details.packages,c;for(c in b){var a={};a.name=d.property+\"-\"+b[c].accommodation.product;a.id=d.property+\"-\"+b[c].accommodation.product;a.category=\"accommodation\";a.price=b[c].price\/b[c].itemCount;a.brand=d.property;a.variant=b[c].rate;a.quantity=b[c].itemCount;e.push(a)}b=d.details.services;for(c in b)a={},a.name=d.property+\"-\"+b[c].product,a.id=d.property+\"-\"+b[c].product,a.category=b[c].type,a.price=b[c].prices.gross,a.tax=b[c].prices.gross-b[c].prices.net,\na.brand=d.property,a.variant=b[c].rate,a.quantity=1,e.push(a);return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{currencyCode:\"",["escape",["macro",59],7],"\",purchase:{actionField:{id:\"",["escape",["macro",60],7],"\",affiliation:\"",["escape",["macro",24],7],"\",revenue:",["escape",["macro",15],8,16],",tax:",["escape",["macro",15],8,16],"-",["escape",["macro",110],8,16],",shipping:0,coupon:\"",["escape",["macro",111],7],"\"},products:",["escape",["macro",112],8,16],"}}};return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(a){a=",["escape",["macro",70],8,16],";var b=parseInt(a.substring(8,10)),c=parseInt(a.substring(5,7));a=parseInt(a.substring(0,4));b=new Date(a,c-1,b);c=new Date;return b=Math.round((b-c)\/864E5+1)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",6],8,16],",c=[];for(i=0;i\u003Cb.length;i++){var a=b[i].products[0].pricesDiscounted,d=b[i].products[0].price;grossPrice=a?a.gross:d.gross;a={};a.id=b[i].products[0].property+\"-\"+b[i].products[0].product;a.variant=b[i].products[0].rate;a.price=grossPrice\/",["escape",["macro",19],8,16],";a.currency=b[i].products[0].currency;a.category=b[i].products[0].type;a.list=\"RoomSelection\";a.position=b[i].position+1;c.push(a)}return b={ecommerce:{currencyCode:\"",["escape",["macro",7],7],"\",impressions:c}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(a){a=",["escape",["macro",33],8,16],";var b=parseInt(a.substring(8,10)),c=parseInt(a.substring(5,7));a=parseInt(a.substring(0,4));b=new Date(a,c-1,b);c=new Date;return b=Math.round((b-c)\/864E5+1)})();"]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_functionName":["macro",98],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",99],
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",21]],["map","index","2","metric",["macro",22]],["map","index","4","metric",["macro",19]],["map","index","5","metric",["macro",18]],["map","index","6","metric",["macro",116]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","7","dimension",["macro",33]],["map","index","8","dimension",["macro",104]],["map","index","11","dimension",["macro",116]],["map","index","12","dimension",["macro",97]],["map","index","13","dimension",["macro",19]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",100],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=[],a=",["escape",["macro",9],8,16],";a=a[a.length-1];a=a[\"package\"];for(var c in a){var b=a[c].pricesDiscounted,e=a[c].prices;grossPrice=b?b.gross:e.gross;b={};adjustedQuantity=\"service\"===a[c].type?",["escape",["macro",21],8,16],":\"meal\"===a[c].type?",["escape",["macro",19],8,16],"*",["escape",["macro",21],8,16],":",["escape",["macro",19],8,16],";b.id=a[c].property+\"-\"+a[c].product;b.name=a[c].product;b.variant=a[c].rate;b.price=grossPrice\/adjustedQuantity;b.currency=a[c].currency;b.category=a[c].type;b.list=\"RoomSelection\";b.quantity=\nadjustedQuantity;d.push(b)}return d={ecommerce:{currencyCode:\"",["escape",["macro",7],7],"\",add:{actionField:{list:\"RoomSelection\"},products:d}}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"selection.services"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",12],8,16],",a=c.services;c=0;for(var b in a)for(var d in a[b].service)a[b].service[d].prices.gross\u0026\u0026(c+=a[b].service[d].prices.gross);b=",["escape",["macro",119],8,16],";d=[];for(i=0;i\u003Cb.length;i++)a={},a.name=b[i].service[0].product,a.id=b[i].service[0].property+\"-\"+b[i].service[0].product,a.variant=b[i].service[0].offer,a.price=c\/b[i].service[0].quantity,a.currency=b[i].service[0].currency,a.category=b[i].service[0].type,a.list=\"ExtraSelection\",a.quantity=b[i].service[0].quantity,\nd.push(a);return c={ecommerce:{currencyCode:\"",["escape",["macro",7],7],"\",add:{actionField:{list:\"ExtraSelection\"},products:d}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",12],8,16],",g=[],b=c.packages,a;for(a in b)for(var f in b[a][\"package\"]){var d=b[a][\"package\"][f].pricesDiscounted,h=b[a][\"package\"][f].prices;grossPrice=d?d.gross:h.gross;d={};adjustedQuantity=\"service\"===b[a][\"package\"][f].type?",["escape",["macro",19],8,16],":\"meal\"===b[a][\"package\"][f].type?",["escape",["macro",19],8,16],"*",["escape",["macro",17],8,16],":",["escape",["macro",19],8,16],";d.name=b[a][\"package\"][f].product;d.id=b[a][\"package\"][f].property+\"-\"+b[a][\"package\"][f].product;d.category=b[a][\"package\"][f].type;\nd.price=grossPrice\/adjustedQuantity;d.brand=b[a][\"package\"][f].property;d.variant=b[a][\"package\"][f].rate;d.quantity=adjustedQuantity;g.push(d)}if(c.services[0])for(a in c=c.services,c)for(var e in c[a].service)b={},adjustedQuantity=\"service\"===c[a].service[e].type?",["escape",["macro",19],8,16],":\"meal\"===c[a].service[e].type?",["escape",["macro",19],8,16],"*c[a].service[e].quantity:c[a].service[e].quantity,b.name=c[a].service[e].product,b.id=c[a].service[e].property+\"-\"+c[a].service[e].product,b.category=c[a].service[e].type,\nb.price=c[a].service[e].prices.gross\/adjustedQuantity,b.quantity=adjustedQuantity,b.brand=c[a].service[e].property,b.variant=c[a].service[e].rate,g.push(b);return g={ecommerce:{checkout:{actionField:{step:1,option:\"Waiting for traveller info\"},products:g}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",12],8,16],",g=[],b=c.packages,a;for(a in b)for(var f in b[a][\"package\"]){var d=b[a][\"package\"][f].pricesDiscounted,h=b[a][\"package\"][f].prices;grossPrice=d?d.gross:h.gross;d={};adjustedQuantity=\"service\"===b[a][\"package\"][f].type?",["escape",["macro",19],8,16],":\"meal\"===b[a][\"package\"][f].type?",["escape",["macro",19],8,16],"*",["escape",["macro",17],8,16],":",["escape",["macro",19],8,16],";d.name=b[a][\"package\"][f].product;d.id=b[a][\"package\"][f].property+\"-\"+b[a][\"package\"][f].product;d.category=b[a][\"package\"][f].type;\nd.price=grossPrice\/adjustedQuantity;d.brand=b[a][\"package\"][f].property;d.variant=b[a][\"package\"][f].rate;d.quantity=adjustedQuantity;g.push(d)}if(c.services[0])for(a in c=c.services,c)for(var e in c[a].service)b={},adjustedQuantity=\"service\"===c[a].service[e].type?",["escape",["macro",19],8,16],":\"meal\"===c[a].service[e].type?",["escape",["macro",19],8,16],"*c[a].service[e].quantity:c[a].service[e].quantity,b.name=c[a].service[e].product,b.id=c[a].service[e].property+\"-\"+c[a].service[e].product,b.category=c[a].service[e].type,\nb.price=c[a].service[e].prices.gross\/adjustedQuantity,b.quantity=adjustedQuantity,b.brand=c[a].service[e].property,b.variant=c[a].service[e].rate,g.push(b);return g={ecommerce:{checkout:{actionField:{step:2,option:\"Go To Payment\"},products:g}}}})();"]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_functionName":["macro",98],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",99],
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",101],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",23]," - ",["macro",3]]],["map","fieldName","title","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",23]],["map","index","2","dimension",["macro",35]],["map","index","3","dimension",["macro",26]],["map","index","4","dimension",["macro",27]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-66526002-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.ghpEnable"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.hotelCodes.distNum"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.theHotelsNetworkAccountKey"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.theHotelsNetworkHotelId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.theHotelsNetworkPropertyId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.tripTeaseKey"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!=typeof ",["escape",["macro",12],8,16],"\u0026\u0026\"undefined\"!=typeof ",["escape",["macro",9],8,16],"\u0026\u00260\u003C",["escape",["macro",9],8,16],".length?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$fb.findBestPriceInQuotationPackages($fb._state.app.data.quotation.packages);return a.price})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"rate",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"code",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.tripTeaseClientKey"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quicksearch.adults.adults1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quicksearch.children.children1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";return a[0].products[0].product})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$fb.findBestPriceInQuotationPackages($fb._state.app.data.quotation.packages);if(!1===a.onlyPackagesInResults)return a.offerType})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;for(var b in a)for(var c in a[b][\"package\"])if(a[b][\"package\"][c].prices.grossInRateCurrency)return a[b][\"package\"][c].prices.rateCurrency})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=",["escape",["macro",13],8,16],";if(b\u0026\u0026b.buyer\u0026\u0026b.buyer.email)return b.buyer.email;if(a\u0026\u0026a.buyer\u0026\u0026a.buyer.email)return a.buyer.email})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.facebookAdsId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.hotelCodes.connectName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.affiliredMerchantId"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"s",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.hotelCodes.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",59],8,16],",b=",["escape",["macro",7],8,16],";return void 0!==a?a:b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $fb._state.app.data.gtm.gtmExtraId})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"taclickid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],";a=Math.round(100*a)\/100;return a*=100})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_map":["list",["map","key","step1","value","PAGEVIEW"],["map","key","step2","value","START_BOOKING"],["map","key","step3","value","START_BOOKING"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"refid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_stripWww":true,
      "vtp_component":"HOST"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"fclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"stid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"rate",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"accommodation",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ddtoken",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"property",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"context.geolocationCountry"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",26],8,16],";return\"zh_Hans_CN\"===a?\"zh_Hans\":\"zh_Hant_HK\"===a?\"zh_Hant\":a.substring(0,2)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",46],8,16],";return a[0].tracking.gtmExtraId})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"FSTBKNGTrackLink",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.location.state"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;return a[0][\"package\"][0].product})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;return a[0][\"package\"][0].rate})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",75],8,16],";return a[0]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.rate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!0,a=",["escape",["macro",46],8,16],",c;for(c in a)if(a[0].tracking.affiliredMerchantId!==a[c].tracking.affiliredMerchantId){b=!1;break}if(!0===b)return a[0].tracking.affiliredMerchantId})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.hdbLiveChatId"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",35],
      "vtp_map":["list",["map","key","itflo31394","value","248680.248681.248682"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],";return a=a.split(\".\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],";return a=a.split(\".\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],";return a=a.split(\".\")[2]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.city"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.property"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",35],
      "vtp_map":["list",["map","key","frstj10868","value","ca2457"],["map","key","hrdub24142","value","ca2456"],["map","key","hrdub24140","value","ca2456"],["map","key","hrdub15909","value","ca2456"],["map","key","hrcav24137","value","ca2456"],["map","key","hrdub12001","value","ca2456"],["map","key","hrdub11726","value","ca2456"],["map","key","hrdub12264","value","ca2456"],["map","key","hrisl24139","value","ca2456"],["map","key","hrcav24138","value","ca2456"],["map","key","hrdub24141","value","ca2456"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";a=a[0].products[0];return a.price.gross})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";a=a[0].products[0];return a.product})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";a=a[0].products[0];return a.rate})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property.tags.sojernEnable"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"display"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"selection.buyer.email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;return a[0].terms.cancellation.type})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;return a[0].terms.conditions})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;return a[0].terms.guarantee})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;return a[0].terms.payment.type})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;var d=0,e;for(e in a){var b=a[e][\"package\"][0].prices.taxes.types,c;for(c in b)\"government-tax\"===b[c].label\u0026\u0026(d+=b[c].amount)}return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=a.packages;a=a.services;var d=0,c;for(c in b)for(var f in b[c][\"package\"])b[c][\"package\"][f].prices.gross\u0026\u0026(d+=b[c][\"package\"][f].prices.gross);for(var e in a)for(var g in a[e].service)a[e].service[g].prices.gross\u0026\u0026(d+=a[e].service[g].prices.gross);return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=a.packages;a=a.services;var e=0,c;for(c in b)for(var f in b[c][\"package\"])b[c][\"package\"][f].prices.net\u0026\u0026(e+=b[c][\"package\"][f].prices.net);for(var d in a)for(var g in a[d].service)a[d].service[g].prices.net\u0026\u0026(nerPrice+=a[d].service[g].prices.net);return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.services;var b=0,c;for(c in a)b+=a[c].service[0].prices.taxes.totals.included,b+=a[c].service[0].prices.taxes.totals.excluded;return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];$.each($fb._state.app.data.quotation.packages,function(f,b){var d=0,e=!1;$.each(b,function(b,c){d+=c.campaignId?c.pricesDiscounted.gross:c.prices.gross;\"service\"===c.type\u0026\u0026(e=!0)});e||a.push(d)});bestPriceEur=a.sort(function(a,b){return a-b})[0];if(void 0!==bestPriceEur)return $.fb(\"crs-helper-price\",{price:bestPriceEur,getOnlyFloatValue:!0})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];$.each($fb._state.app.data.quotation.packages,function(e,b){var d=0;$.each(b,function(b,c){d+=c.campaignId?c.pricesDiscounted.gross:c.prices.gross});a.push(d)});bestPriceEur=a.sort(function(a,b){return a-b})[0];if(void 0!==bestPriceEur)return $.fb(\"crs-helper-price\",{price:bestPriceEur,getOnlyFloatValue:!0})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",194],8,16],",b=",["escape",["macro",195],8,16],";return void 0!==a\u0026\u0026a\u003Cb?a:b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"quicksearch.childrenAges.childrenAges1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",137],8,16],",b=",["escape",["macro",197],8,16],";console.log(\"[TT] Children1 \"+a);console.log(\"[TT] ChildrenAges \"+b);if(0\u003Cchildren)for(a=1;a\u003Cchildren;)a++;return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";return a[0].products[0].product})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";return a[0].products[0].rate})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=",["escape",["macro",137],8,16],",a=",["escape",["macro",197],8,16],",b=\"\";if(0\u003Cd){var c=1;for(b=0==a[0]||null==a[0]?\"12\":a[0];c\u003Cd;)b=0==a[c]||null==a[0]?b+\",12\":b+(\",\"+a[c]),c++}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",163],8,16],",a=\"en fr es it de nl dk sv nb hu ar ru\".split(\" \");a=a.indexOf(b);return 0\u003C=a?b:\"en\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quicksearch.childrenAges"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=",["escape",["macro",13],8,16],";if(b\u0026\u0026b.buyer\u0026\u0026b.buyer.country)return b.buyer.country;if(a\u0026\u0026a.buyer\u0026\u0026a.buyer.country)return a.buyer.country})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"selection.buyer.country"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=",["escape",["macro",13],8,16],";if(b\u0026\u0026b.buyer\u0026\u0026b.buyer.lastName)return b.buyer.lastName;if(a\u0026\u0026a.buyer\u0026\u0026a.buyer.lastName)return a.buyer.lastName})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=",["escape",["macro",13],8,16],";if(b\u0026\u0026b.buyer\u0026\u0026b.buyer.firstName)return b.buyer.firstName;if(a\u0026\u0026a.buyer\u0026\u0026a.buyer.firstName)return a.buyer.firstName})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=",["escape",["macro",13],8,16],";if(b\u0026\u0026b.buyer\u0026\u0026b.buyer.phone)return b.buyer.phone;if(a\u0026\u0026a.buyer\u0026\u0026a.buyer.phone)return a.buyer.phone})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=a.packages;a=a.services;var d=0,c;for(c in b)for(var f in b[c][\"package\"])b[c][\"package\"][f].prices.grossInLocaleCurrency\u0026\u0026(d+=b[c][\"package\"][f].prices.grossInLocaleCurrency);for(var e in a)for(var g in a[e].service)a[e].service[g].prices.grossInLocaleCurrency\u0026\u0026(d+=a[e].service[g].prices.grossInLocaleCurrency);return parseFloat(d.toFixed(2))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=a.packages;a=a.services;var d=0,c;for(c in b)for(var f in b[c][\"package\"])b[c][\"package\"][f].prices.grossInRateCurrency\u0026\u0026(d+=b[c][\"package\"][f].prices.grossInRateCurrency);for(var e in a)for(var g in a[e].service)a[e].service[g].prices.grossInRateCurrency\u0026\u0026(d+=a[e].service[g].prices.grossInRateCurrency);return parseFloat(d.toFixed(2))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=a.packages;a=a.services;var e=0,c;for(c in b)for(var f in b[c][\"package\"])b[c][\"package\"][f].prices.netInLocaleCurrency\u0026\u0026(e+=b[c][\"package\"][f].prices.netInLocaleCurrency);for(var d in a)for(var g in a[d].service)a[d].service[g].prices.netInLocaleCurrency\u0026\u0026(nerPrice+=a[d].service[g].prices.netInLocaleCurrency);return parseFloat(e.toFixed(2))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=a.packages;a=a.services;var e=0,c;for(c in b)for(var f in b[c][\"package\"])b[c][\"package\"][f].prices.netInRateCurrency\u0026\u0026(e+=b[c][\"package\"][f].prices.netInRateCurrency);for(var d in a)for(var g in a[d].service)a[d].service[g].prices.netInRateCurrency\u0026\u0026(nerPrice+=a[d].service[g].prices.netInRateCurrency);return parseFloat(e.toFixed(2))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";a=a.packages;for(var b in a)for(var c in a[b][\"package\"])if(a[b][\"package\"][c].prices.grossInRateCurrency)return a[b][\"package\"][c].prices.localeCurrency})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0===$fb._state.isProduction?!0:$fb._state.isProduction})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.mealType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"booking.guarantee"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!!navigator.userAgent.match(\/Trident\\\/7.0\/),b=!!navigator.userAgent.match(\/.NET4.0E\/);a=a\u0026\u0026b;b=navigator.userAgent.match(\/MSIE\/i)?!0:!1;return a||b?!0:!1})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"s",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"group",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"group",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",12],8,16],",a=",["escape",["macro",13],8,16],";if(a\u0026\u0026a.details.totalPrice)return a.details.totalPrice-a.details.totalServices;if(b){b=b.packages;a=0;for(var c in b)a+=b[c][\"package\"][0].prices.grossInRateCurrency;return a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";return a[0].products[0].rate})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__ua",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",106],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":155
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",2],
      "vtp_eventLabel":["macro",3],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","13","dimension",["macro",34]],["map","index","1","dimension",["macro",35]],["map","index","14","dimension",["macro",36]],["map","index","15","dimension",["macro",37]],["map","index","16","dimension",["macro",38]],["map","index","17","dimension",["macro",39]],["map","index","20","dimension",["macro",40]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",48],
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",49],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]],["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieDomain","value",["macro",50]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":42
    },{
      "function":"__vei",
      "once_per_load":true,
      "vtp_jsUrl":["macro",52],
      "tag_id":47
    },{
      "function":"__veip",
      "once_per_load":true,
      "vtp_pixelUrl":["macro",53],
      "tag_id":48
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",48],
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",49],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]],["map","fieldName","allowLinker","value","true"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":50
    },{
      "function":"__asp",
      "once_per_load":true,
      "vtp_pixelId":["macro",57],
      "vtp_customerId":["macro",56],
      "vtp_conversionValueCurrency":"EUR",
      "tag_id":51
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/secure.eqtracking.com\/trk.gif?price=",["escape",["macro",15],12],"\u0026currency=",["escape",["macro",59],12],"\u0026customerid=",["escape",["macro",58],12],"\u0026orderid=",["escape",["macro",60],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",61],
      "tag_id":86
    },{
      "function":"__awct",
      "once_per_load":true,
      "vtp_conversionValue":["template",["macro",59],["macro",15]],
      "vtp_orderId":["macro",60],
      "vtp_conversionId":["macro",62],
      "vtp_currencyCode":["macro",59],
      "vtp_conversionLabel":["macro",63],
      "vtp_url":["macro",64],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":87
    },{
      "function":"__sp",
      "once_per_load":true,
      "vtp_dataLayerVariable":["macro",14],
      "vtp_conversionId":["macro",65],
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_conversionLabel":["macro",66],
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",64],
      "vtp_enableRdpCheckbox":true,
      "tag_id":88
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",2],
      "vtp_eventLabel":["macro",3],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":94
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",48],
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",49],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]],["map","fieldName","allowLinker","value","true"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",2],
      "vtp_eventLabel":["macro",3],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":96
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",2],
      "vtp_eventLabel":["macro",3],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__ga",
      "once_per_event":true,
      "vtp_detectTitle":true,
      "vtp_ignoredRef":["list"],
      "vtp_useDebugVersion":false,
      "vtp_allowLinker":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_cookiePathCopy":["list"],
      "vtp_clientInfo":true,
      "vtp_campaignTrack":true,
      "vtp_anonymizeIp":false,
      "vtp_webPropertyId":["macro",43],
      "vtp_allowAnchor":false,
      "vtp_allowHash":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_sendHitsToGoogle":true,
      "vtp_enableInPageLinkId":false,
      "vtp_forceSsl":false,
      "vtp_domainName":"book-secure.com",
      "vtp_ignoredOrganic":["list"],
      "vtp_detectFlash":true,
      "tag_id":98
    },{
      "function":"__ga",
      "once_per_event":true,
      "vtp_detectTitle":true,
      "vtp_ignoredRef":["list"],
      "vtp_useDebugVersion":false,
      "vtp_allowLinker":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_cookiePathCopy":["list"],
      "vtp_clientInfo":true,
      "vtp_campaignTrack":true,
      "vtp_anonymizeIp":false,
      "vtp_webPropertyId":["macro",67],
      "vtp_allowAnchor":false,
      "vtp_allowHash":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_sendHitsToGoogle":true,
      "vtp_enableInPageLinkId":false,
      "vtp_forceSsl":false,
      "vtp_domainName":"book-secure.com",
      "vtp_ignoredOrganic":["list"],
      "vtp_detectFlash":true,
      "tag_id":99
    },{
      "function":"__ga",
      "once_per_event":true,
      "vtp_detectTitle":true,
      "vtp_ignoredRef":["list"],
      "vtp_useDebugVersion":false,
      "vtp_allowLinker":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_cookiePathCopy":["list"],
      "vtp_clientInfo":true,
      "vtp_campaignTrack":true,
      "vtp_anonymizeIp":false,
      "vtp_webPropertyId":["macro",54],
      "vtp_allowAnchor":false,
      "vtp_allowHash":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_sendHitsToGoogle":true,
      "vtp_enableInPageLinkId":false,
      "vtp_forceSsl":false,
      "vtp_domainName":"book-secure.com",
      "vtp_ignoredOrganic":["list"],
      "vtp_detectFlash":true,
      "tag_id":100
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/t.skyscnr.com\/hotels\/track\/booking?fclid=",["escape",["macro",69],12],"\u0026partner=h_fb\u0026order_id=",["escape",["macro",60],12],"\u0026hotel_id=",["escape",["macro",35],12],"\u0026hotel_name=",["escape",["macro",23],12],"\u0026hotel_city=",["escape",["macro",28],12],"\u0026hotel_country=",["escape",["macro",29],12],"\u0026checkin=",["escape",["macro",70],12],"\u0026checkout=",["escape",["macro",71],12],"\u0026guests=",["escape",["macro",74],12],"\u0026rooms=",["escape",["macro",76],12],"\u0026amount=",["escape",["macro",15],12],"\u0026currency=",["escape",["macro",59],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",61],
      "tag_id":107
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",49],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]],["map","fieldName","allowLinker","value","true"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","13","dimension",["macro",34]],["map","index","1","dimension",["macro",35]],["map","index","14","dimension",["macro",36]],["map","index","15","dimension",["macro",37]],["map","index","16","dimension",["macro",38]],["map","index","17","dimension",["macro",39]],["map","index","18","dimension",["macro",77]],["map","index","19","dimension",["macro",78]],["map","index","20","dimension",["macro",40]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":111
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]],["map","fieldName","allowLinker","value","true"],["map","fieldName","hitCallback","value",["macro",81]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","13","dimension",["macro",34]],["map","index","1","dimension",["macro",35]],["map","index","14","dimension",["macro",36]],["map","index","15","dimension",["macro",37]],["map","index","16","dimension",["macro",38]],["map","index","17","dimension",["macro",39]],["map","index","18","dimension",["macro",77]],["map","index","19","dimension",["macro",78]],["map","index","20","dimension",["macro",40]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":112
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",48],
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]],["map","fieldName","allowLinker","value","true"],["map","fieldName","hitCallback","value",["macro",84]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]],["map","index","7","metric",["macro",76]],["map","index","8","metric",["macro",85]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",48],
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]],["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieDomain","value",["macro",50]],["map","fieldName","hitCallback","value",["macro",88]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]],["map","index","7","metric",["macro",76]],["map","index","8","metric",["macro",85]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",48],
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]],["map","fieldName","allowLinker","value","true"],["map","fieldName","hitCallback","value",["macro",91]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]],["map","index","7","metric",["macro",76]],["map","index","8","metric",["macro",85]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":115
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/secure.eqtracking.com\/convmetagenius.gif?amount=",["escape",["macro",15],12],"\u0026currency=",["escape",["macro",59],12],"\u0026hotelid=",["escape",["macro",35],12],"\u0026orderid=",["escape",["macro",60],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",61],
      "tag_id":116
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/www.kayak.com\/s\/kayakpixel\/confirm\/FASTBOOKINGDIRECT?kayakclickid=",["escape",["macro",92],12],"\u0026price=",["escape",["macro",15],12],"\u0026currency=",["escape",["macro",59],12],"\u0026confirmation=",["escape",["macro",60],12],"\u0026rand=",["escape",["macro",93],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",61],
      "tag_id":120
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/www.kayak.com\/s\/kayakpixel\/cancel\/FASTBOOKINGDIRECT?\u0026confirmation=",["escape",["macro",60],12],"\u0026rand=",["escape",["macro",93],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",61],
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",48],
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","value","value",["macro",15]],["map","fieldName","allowLinker","value","true"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",17]],["map","index","2","metric",["macro",18]],["map","index","3","metric",["macro",19]],["map","index","4","metric",["macro",20]],["map","index","5","metric",["macro",21]],["map","index","6","metric",["macro",22]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",26]],["map","index","5","dimension",["macro",27]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",7]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","1","dimension",["macro",35]],["map","index","13","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":131
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":false,
      "tag_id":133
    },{
      "function":"__awct",
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",60],
      "vtp_conversionValue":["template",["macro",59],["macro",15]],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1058193787",
      "vtp_currencyCode":["macro",59],
      "vtp_conversionLabel":"lilZCLfLo58BEPuCy_gD",
      "vtp_url":["macro",64],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":141
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_functionName":["macro",98],
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Refund",
      "vtp_eventLabel":["template","Order ID:",["macro",60]],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",107],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",102]],["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",72]],["map","index","2","metric",["macro",73]],["map","index","4","metric",["macro",85]],["map","index","5","metric",["macro",76]]],
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","7","dimension",["macro",70]],["map","index","8","dimension",["macro",71]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","12","dimension",["macro",97]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":153
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",85,2]],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_functionName":["macro",98],
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["template","Order ID:",["macro",60]],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",113],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",102]],["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",72]],["map","index","2","metric",["macro",73]],["map","index","4","metric",["macro",85]],["map","index","5","metric",["macro",76]],["map","index","6","metric",["macro",114]]],
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","7","dimension",["macro",70]],["map","index","8","dimension",["macro",71]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",114]],["map","index","12","dimension",["macro",97]],["map","index","13","dimension",["macro",85]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":154
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",115],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_functionName":["macro",98],
      "vtp_gaSettings":["macro",117],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":"List:RoomSelection",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":156
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/secure.wego.com\/analytics\/v2\/conversions?conversion_id=c-wego-fastbooking-direct.com\u0026click_id=\u0026comm_currency_code=",["escape",["macro",59],12],"\u0026bv_currency_code=",["escape",["macro",59],12],"\u0026transaction_id=",["escape",["macro",60],12],"\u0026commission=\u0026total_booking_value=",["escape",["macro",15],12],"\u0026status=confirmed"],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",61],
      "tag_id":157
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_functionName":["macro",98],
      "vtp_gaSettings":["macro",117],
      "vtp_eventAction":"AddToCart",
      "vtp_eventLabel":"RoomSelection",
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",118],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","7","dimension",["macro",33]],["map","index","8","dimension",["macro",104]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",116]],["map","index","12","dimension",["macro",97]],["map","index","13","dimension",["macro",19]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":158
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_functionName":["macro",98],
      "vtp_gaSettings":["macro",117],
      "vtp_eventAction":"AddToCart",
      "vtp_eventLabel":"ExtraSelection",
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",120],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","7","dimension",["macro",33]],["map","index","8","dimension",["macro",104]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",116]],["map","index","12","dimension",["macro",97]],["map","index","13","dimension",["macro",19]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":159
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_functionName":["macro",98],
      "vtp_gaSettings":["macro",117],
      "vtp_eventAction":"checkout",
      "vtp_eventLabel":"Step1",
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",121],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","7","dimension",["macro",33]],["map","index","8","dimension",["macro",104]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",116]],["map","index","12","dimension",["macro",97]],["map","index","13","dimension",["macro",19]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":160
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_functionName":["macro",98],
      "vtp_gaSettings":["macro",117],
      "vtp_eventAction":"checkout",
      "vtp_eventLabel":"Step2",
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",122],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","7","dimension",["macro",33]],["map","index","8","dimension",["macro",104]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",116]],["map","index","12","dimension",["macro",97]],["map","index","13","dimension",["macro",19]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":161
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_functionName":["macro",98],
      "vtp_metric":["list",["map","index","1","metric",["macro",21]],["map","index","2","metric",["macro",22]],["map","index","4","metric",["macro",19]],["map","index","5","metric",["macro",18]],["map","index","7","metric",["macro",116]]],
      "vtp_gaSettings":["macro",123],
      "vtp_eventAction":"SearchCompleted - Availability",
      "vtp_eventLabel":["template",["macro",33]," - LOS - ",["macro",19]],
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","7","dimension",["macro",33]],["map","index","8","dimension",["macro",104]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",116]],["map","index","12","dimension",["macro",97]],["map","index","13","dimension",["macro",19]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":162
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",103]],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_functionName":["macro",98],
      "vtp_metric":["list",["map","index","1","metric",["macro",21]],["map","index","2","metric",["macro",22]],["map","index","4","metric",["macro",19]],["map","index","5","metric",["macro",18]],["map","index","7","metric",["macro",116]]],
      "vtp_gaSettings":["macro",123],
      "vtp_eventAction":"SearchCompleted - NoAvailability",
      "vtp_eventLabel":["template",["macro",33]," - LOS - ",["macro",19]],
      "vtp_dimension":["list",["map","index","1","dimension","Attraction"],["map","index","3","dimension",["macro",23]],["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",29]],["map","index","7","dimension",["macro",33]],["map","index","8","dimension",["macro",104]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",116]],["map","index","12","dimension",["macro",97]],["map","index","13","dimension",["macro",19]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":167
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",124],
      "vtp_eventAction":["macro",2],
      "vtp_eventLabel":["macro",3],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",36]],["map","index","6","dimension",["macro",37]],["map","index","7","dimension",["macro",5]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":600
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",124],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",36]],["map","index","6","dimension",["macro",37]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":601
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",124],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",60],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",36]],["map","index","6","dimension",["macro",37]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":603
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EjQuery.getScript(\"\/\/www.googletraveladservices.com\/travel\/clk\/pagead\/conversion\/58\/?label\\x3dHPA\\x26guid\\x3dON\\x26script\\x3d0\\x26ord\\x3d1234567890\\x26data\\x3dhct_partner_hotel_id\\x3d",["escape",["macro",126],7],";hct_base_price\\x3d",["escape",["macro",110],7],";hct_total_price\\x3d",["escape",["macro",15],7],";hct_currency_code\\x3d",["escape",["macro",59],7],";hct_checkin_date\\x3d",["escape",["macro",70],7],";hct_checkout_date\\x3d",["escape",["macro",71],7],";hct_booking_xref\\x3d",["escape",["macro",60],7],";hct_ver\\x3d1.0.j\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"cc4d2e5c\",adroll_currency:",["escape",["macro",59],8,16],",adroll_conversion_value:",["escape",["macro",15],8,16],",ORDER_ID:",["escape",["macro",60],8,16],"})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction include(b){var c=document.getElementsByTagName(\"head\")[0],a=document.createElement(\"script\");a.src=b;a.type=\"text\/javascript\";c.appendChild(a)}include(\"https:\/\/www.thehotelsnetwork.com\/js\/hotel_price_widget.js?hotel_id\\x3d",["escape",["macro",128],7],"\\x26property_id\\x3d",["escape",["macro",129],7],"\\x26account_key\\x3d",["escape",["macro",127],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/widget.triptease.net\/confirm.js?token=",["escape",["macro",130],12],"\u0026amp;bookingValue=",["escape",["macro",15],12],"\u0026amp;bookingCurrency=",["escape",["macro",59],12],"\u0026amp;bookingReference=",["escape",["macro",60],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" id=\"triptease-placeholder\"\u003E0\u003C$(\"#triptease-remove-search\").length\u0026\u0026$(\"#triptease-remove-search\").remove();0\u003C$(\"#triptease-remove-display\").length\u0026\u0026$(\"#triptease-remove-display\").remove();if(!window.document.getElementById(\"triptease-script\")){var paperboyIntegration=document.createElement(\"script\");paperboyIntegration.type=\"text\/javascript\";paperboyIntegration.id=\"triptease-script\";paperboyIntegration.src=\"https:\/\/static.triptease.io\/paperboy\/",["escape",["macro",135],7],".js?hotelkey\\x3d",["escape",["macro",130],7],"\";document.querySelector(\"head\").appendChild(paperboyIntegration)}\n0\u003C$(\"#lodging-search-json\").length\u0026\u0026$(\"#lodging-search-json\").remove();var lodgingSearchElement=document.createElement(\"script\");lodgingSearchElement.type=\"application\/ld+json\";lodgingSearchElement.id=\"lodging-search-json\";lodgingSearchElement.text=JSON.stringify({\"@context\":\"https:\/\/structured-data.triptease.io\",\"@type\":\"LodgingSearch\",checkinTime:",["escape",["macro",33],8,16],",checkoutTime:",["escape",["macro",104],8,16],",numAdults:",["escape",["macro",136],8,16],",numChildren:",["escape",["macro",137],8,16],",numRooms:\"1\"});document.querySelector(\"head\").appendChild(lodgingSearchElement);\n0\u003C$(\"#hotel-room-json\").length\u0026\u0026$(\"#hotel-room-json\").remove();var hotelRoomElement=document.createElement(\"script\");hotelRoomElement.type=\"application\/ld+json\";hotelRoomElement.id=\"hotel-room-json\";hotelRoomElement.text=JSON.stringify({\"@context\":\"http:\/\/schema.org\/\",\"@type\":\"Offer\",itemOffered:{\"@type\":\"HotelRoom\",name:",["escape",["macro",138],8,16],"},name:",["escape",["macro",139],8,16],",priceSpecification:{\"@type\":\"UnitPriceSpecification\",price:",["escape",["macro",132],8,16],",priceCurrency:",["escape",["macro",27],8,16],",unitText:\"Total\"}});\ndocument.querySelector(\"head\").appendChild(hotelRoomElement);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"triptease-remove-search\"\u003EPFConfig.deactivate();$(\"#triptease-placeholder\").remove();var structuredData=document.getElementById(\"lodging-search-json\");structuredData\u0026\u0026structuredData.remove();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",46,2]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"triptease-remove-display\"\u003EPFConfig.deactivate();$(\"#triptease-placeholder\").remove();var structuredData=document.getElementById(\"lodging-search-json\");structuredData\u0026\u0026structuredData.remove();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a={pt:\"SEARCH\",hd1:\"",["escape",["macro",33],7],"\",hd2:\"",["escape",["macro",104],7],"\",hc1:\"",["escape",["macro",28],7],"\",hb:\"",["escape",["macro",35],7],"\",hpid:\"",["escape",["macro",35],7],"\",hp:\"\",hcu:\"\",hconfno:\"\"},b=[];for(key in a)b.push(key+\"\\x3d\"+encodeURIComponent(a[key]));a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/beacon.sojern.com\/pixel\/cp\/9?f_v\\x3dcp_v1_js\\x26p_v\\x3d3\\x26\"+b.join(\"\\x26\");(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a={pt:\"SHOPPING_CART\",hd1:\"",["escape",["macro",33],7],"\",hd2:\"",["escape",["macro",104],7],"\",hc1:\"",["escape",["macro",28],7],"\",hb:\"",["escape",["macro",35],7],"\",hpid:\"",["escape",["macro",35],7],"\",hp:\"",["escape",["macro",15],7],"\",hcu:\"",["escape",["macro",140],7],"\",hconfno:\"\"},b=[];for(key in a)b.push(key+\"\\x3d\"+encodeURIComponent(a[key]));a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/beacon.sojern.com\/pixel\/cp\/9?f_v\\x3dcp_v1_js\\x26p_v\\x3d3\\x26\"+b.join(\"\\x26\");(document.getElementsByTagName(\"head\")[0]||\ndocument.getElementsByTagName(\"body\")[0]).appendChild(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(p){function q(b,a){var h=(65535\u0026b)+(65535\u0026a);return(b\u003E\u003E16)+(a\u003E\u003E16)+(h\u003E\u003E16)\u003C\u003C16|65535\u0026h}function t(b,a,h,n,r,g){b=q(q(a,b),q(n,g));r=b\u003C\u003Cr|b\u003E\u003E\u003E32-r;return q(r,h)}function g(b,a,h,n,r,g,c){return t(a\u0026h|~a\u0026n,b,a,r,g,c)}function k(b,a,h,n,r,g,c){return t(a\u0026n|h\u0026~n,b,a,r,g,c)}function l(b,a,h,n,g,k,c){return t(a^h^n,b,a,g,k,c)}function m(b,a,h,n,g,k,c){return t(h^(a|~n),b,a,g,k,c)}function u(b,a){var h,n,r,p;b[a\u003E\u003E5]|=128\u003C\u003Ca%32;b[14+(a+64\u003E\u003E\u003E9\u003C\u003C4)]=a;var c=1732584193,d=-271733879,e=-1732584194,f=\n271733878;for(a=0;a\u003Cb.length;a+=16)d=m(d=m(d=m(d=m(d=l(d=l(d=l(d=l(d=k(d=k(d=k(d=k(d=g(d=g(d=g(d=g(n=d,e=g(r=e,f=g(p=f,c=g(h=c,d,e,f,b[a],7,-680876936),d,e,b[a+1],12,-389564586),c,d,b[a+2],17,606105819),f,c,b[a+3],22,-1044525330),e=g(e,f=g(f,c=g(c,d,e,f,b[a+4],7,-176418897),d,e,b[a+5],12,1200080426),c,d,b[a+6],17,-1473231341),f,c,b[a+7],22,-45705983),e=g(e,f=g(f,c=g(c,d,e,f,b[a+8],7,1770035416),d,e,b[a+9],12,-1958414417),c,d,b[a+10],17,-42063),f,c,b[a+11],22,-1990404162),e=g(e,f=g(f,c=g(c,d,e,f,b[a+\n12],7,1804603682),d,e,b[a+13],12,-40341101),c,d,b[a+14],17,-1502002290),f,c,b[a+15],22,1236535329),e=k(e,f=k(f,c=k(c,d,e,f,b[a+1],5,-165796510),d,e,b[a+6],9,-1069501632),c,d,b[a+11],14,643717713),f,c,b[a],20,-373897302),e=k(e,f=k(f,c=k(c,d,e,f,b[a+5],5,-701558691),d,e,b[a+10],9,38016083),c,d,b[a+15],14,-660478335),f,c,b[a+4],20,-405537848),e=k(e,f=k(f,c=k(c,d,e,f,b[a+9],5,568446438),d,e,b[a+14],9,-1019803690),c,d,b[a+3],14,-187363961),f,c,b[a+8],20,1163531501),e=k(e,f=k(f,c=k(c,d,e,f,b[a+13],5,-1444681467),\nd,e,b[a+2],9,-51403784),c,d,b[a+7],14,1735328473),f,c,b[a+12],20,-1926607734),e=l(e,f=l(f,c=l(c,d,e,f,b[a+5],4,-378558),d,e,b[a+8],11,-2022574463),c,d,b[a+11],16,1839030562),f,c,b[a+14],23,-35309556),e=l(e,f=l(f,c=l(c,d,e,f,b[a+1],4,-1530992060),d,e,b[a+4],11,1272893353),c,d,b[a+7],16,-155497632),f,c,b[a+10],23,-1094730640),e=l(e,f=l(f,c=l(c,d,e,f,b[a+13],4,681279174),d,e,b[a],11,-358537222),c,d,b[a+3],16,-722521979),f,c,b[a+6],23,76029189),e=l(e,f=l(f,c=l(c,d,e,f,b[a+9],4,-640364487),d,e,b[a+12],\n11,-421815835),c,d,b[a+15],16,530742520),f,c,b[a+2],23,-995338651),e=m(e,f=m(f,c=m(c,d,e,f,b[a],6,-198630844),d,e,b[a+7],10,1126891415),c,d,b[a+14],15,-1416354905),f,c,b[a+5],21,-57434055),e=m(e,f=m(f,c=m(c,d,e,f,b[a+12],6,1700485571),d,e,b[a+3],10,-1894986606),c,d,b[a+10],15,-1051523),f,c,b[a+1],21,-2054922799),e=m(e,f=m(f,c=m(c,d,e,f,b[a+8],6,1873313359),d,e,b[a+15],10,-30611744),c,d,b[a+6],15,-1560198380),f,c,b[a+13],21,1309151649),e=m(e,f=m(f,c=m(c,d,e,f,b[a+4],6,-145523070),d,e,b[a+11],10,-1120210379),\nc,d,b[a+2],15,718787259),f,c,b[a+9],21,-343485551),c=q(c,h),d=q(d,n),e=q(e,r),f=q(f,p);return[c,d,e,f]}function x(b){var a,h=\"\",g=32*b.length;for(a=0;a\u003Cg;a+=8)h+=String.fromCharCode(b[a\u003E\u003E5]\u003E\u003E\u003Ea%32\u0026255);return h}function v(b){var a,h=[];h[(b.length\u003E\u003E2)-1]=void 0;for(a=0;a\u003Ch.length;a+=1)h[a]=0;var g=8*b.length;for(a=0;a\u003Cg;a+=8)h[a\u003E\u003E5]|=(255\u0026b.charCodeAt(a\/8))\u003C\u003Ca%32;return h}function y(b){var a,h=\"0123456789abcdef\",g=\"\";for(a=0;a\u003Cb.length;a+=1){var k=b.charCodeAt(a);g+=h.charAt(k\u003E\u003E\u003E4\u002615)+h.charAt(15\u0026\nk)}return g}function z(b){b=unescape(encodeURIComponent(b));return b=x(u(v(b),8*b.length))}function A(b,a){b=unescape(encodeURIComponent(b));a=unescape(encodeURIComponent(a));var h,g=v(b),k=[],l=[];k[15]=l[15]=void 0;16\u003Cg.length\u0026\u0026(g=u(g,8*b.length));for(b=0;16\u003Eb;b+=1)k[b]=909522486^g[b],l[b]=1549556828^g[b];return b=(h=u(k.concat(v(a)),512+8*a.length),x(u(l.concat(h),640)))}function w(b,a,g){return a?g?A(a,b):y(A(a,b)):g?z(b):y(z(b))}\"function\"==typeof define\u0026\u0026define.amd?define(function(){return w}):\n\"object\"==typeof module\u0026\u0026module.exports?module.exports=w:p.md5=w}(this);\n(function(){var p={pt:\"CONVERSION\",hd1:\"",["escape",["macro",70],7],"\",hd2:\"",["escape",["macro",71],7],"\",hc1:\"",["escape",["macro",28],7],"\",hb:\"",["escape",["macro",35],7],"\",hpid:\"",["escape",["macro",35],7],"\",hp:\"",["escape",["macro",15],7],"\",hcu:\"",["escape",["macro",59],7],"\",hconfno:\"",["escape",["macro",60],7],"\",md5_eml:md5(",["escape",["macro",141],8,16],")},q=[];for(key in p)q.push(key+\"\\x3d\"+encodeURIComponent(p[key]));p=document.createElement(\"script\");p.type=\"text\/javascript\";p.async=!0;p.src=\"https:\/\/beacon.sojern.com\/pixel\/cp\/9?f_v\\x3dcp_v1_js\\x26p_v\\x3d3\\x26\"+\nq.join(\"\\x26\");(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(p)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",142],7],"\");fbq(\"track\",\"PageView\");\nfbq(\"trackSingle\",\"",["escape",["macro",142],7],"\",\"Search\",{content_type:\"hotel\",content_ids:[\"",["escape",["macro",143],7],"\"],checkin_date:\"",["escape",["macro",33],7],"\",checkout_date:\"",["escape",["macro",104],7],"\",city:\"",["escape",["macro",28],7],"\",region:\"",["escape",["macro",29],7],"\",country:\"",["escape",["macro",29],7],"\",num_adults:",["escape",["macro",21],8,16],",num_children:",["escape",["macro",22],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",142],7],"\");fbq(\"track\",\"PageView\");\nfbq(\"trackSingle\",\"",["escape",["macro",142],7],"\",\"InitiateCheckout\",{value:\"",["escape",["macro",15],7],"\",currency:\"",["escape",["macro",7],7],"\",content_type:\"hotel\",content_ids:[\"",["escape",["macro",143],7],"\"],checkin_date:\"",["escape",["macro",33],7],"\",checkout_date:\"",["escape",["macro",104],7],"\",city:\"",["escape",["macro",28],7],"\",region:\"",["escape",["macro",29],7],"\",country:\"",["escape",["macro",29],7],"\",num_adults:",["escape",["macro",21],8,16],",num_children:",["escape",["macro",22],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",142],7],"\");fbq(\"track\",\"PageView\");\nfbq(\"trackSingle\",\"",["escape",["macro",142],7],"\",\"Purchase\",{value:\"",["escape",["macro",15],7],"\",currency:\"",["escape",["macro",59],7],"\",content_type:\"hotel\",content_ids:[\"",["escape",["macro",143],7],"\"],checkin_date:\"",["escape",["macro",70],7],"\",checkout_date:\"",["escape",["macro",71],7],"\",city:\"",["escape",["macro",28],7],"\",region:\"",["escape",["macro",29],7],"\",country:\"",["escape",["macro",29],7],"\",num_adults:",["escape",["macro",72],8,16],",num_children:",["escape",["macro",73],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/customs.affilired.com\/track\/?merchant\\x3d",["escape",["macro",144],7],"\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar orderRef=\"",["escape",["macro",60],7]," ",["escape",["macro",146],7],"\",payoutCodes=\"\",offlineCode=\"\",uid=\"",["escape",["macro",35],7],"\",htname=\"\",merchantID=",["escape",["macro",144],8,16],",pixel=0,orderValue=",["escape",["macro",110],8,16],",checkOutDate=\"",["escape",["macro",71],7],"\",currencyCode=\"",["escape",["macro",147],7],"\";\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/scripts.affilired.com\/v2\/confirmation.php?merid=",["escape",["macro",144],12],"\u0026amp;uid=",["escape",["macro",35],12],"\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _affExec=!1;dataLayerFB.forEach(function(a){null!=a.selection\u0026\u0026null!=a.selection.buyer\u0026\u0026(_affExec=!0)});1==_affExec\u0026\u0026recV3(orderValue,orderRef,merchantID,uid,htname,pixel,payoutCodes,offlineCode,checkOutDate,currencyCode);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,a,d,b,e){c[b]=c[b]||[];c=a.getElementsByTagName(d)[0];a=a.createElement(d);b=\"dataLayer\"!=b?\"\\x26l\\x3d\"+b:\"\";a.async=!0;a.src=\"https:\/\/www.googletagmanager.com\/gtm.js?id\\x3d\"+e+b;c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"dataLayerFB\",",["escape",["macro",148],8,16],");\u003C\/script\u003E\n\n\n\n\u003Cnoscript\u003E\u003Ciframe src=\"https:\/\/www.googletagmanager.com\/ns.html?id=",["escape",["macro",148],12],")\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"\u003E\u003C\/iframe\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _gaq=_gaq||[];_gaq.push([\"_setAccount\",",["escape",["macro",43],8,16],"]);_gaq.push([\"_setDomainName\",\"book-secure.com\"]);_gaq.push([\"_setAllowLinker\",!0]);_gaq.push([\"_set\",\"currencyCode\",",["escape",["macro",59],8,16],"]);_gaq.push([\"_addTrans\",",["escape",["macro",60],8,16],",",["escape",["macro",35],8,16],",",["escape",["macro",15],8,16],",",["escape",["macro",15],8,16],"-",["escape",["macro",110],8,16],"]);\nfor(var booking=",["escape",["macro",13],8,16],",packages=booking.details.packages,id=0;id\u003Cpackages.length;id++){var sid=1+id,rate=packages[id].rate,accommodation=packages[id].accommodation.product,sku=[",["escape",["macro",35],8,16],",rate,accommodation].join(\"-\")+\"_\"+sid,price=packages[id].price,quantity=1;_gaq.push([\"_addItem\",",["escape",["macro",60],8,16],",sku,accommodation,rate,price,quantity])}var services=booking.details.services;\nfor(id=0;id\u003Cservices.length;id++){sid=1+id;var product=services[id].product;rate=services[id].rate;sku=[",["escape",["macro",35],8,16],",rate,product].join(\"-\")+\"_\"+sid;price=services[id].prices.gross;quantity=1;_gaq.push([\"_addItem\",",["escape",["macro",60],8,16],",sku,product,rate,price,quantity])}_gaq.push([\"_trackTrans\"]);\nif(\"undefined\"==typeof GoogleLoaded){(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/ssl\":\"http:\/\/www\")+\".google-analytics.com\/ga.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();var GoogleLoaded=1};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,e,g,f,h,b,a,c){d.taq||(b=d.taq=function(){b.queue.push(arguments)},b.queue=[],\/bot|googlebot|crawler|spider|robot|crawling\/i.test(g.userAgent)||(a=e.createElement(f),a.async=!0,a.src=h,c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(a,c)))})(window,document,navigator,\"script\",\"\/\/static.tacdn.com\/js3\/taevents-c.js\");taq(\"init\",\"688076243\");\ntaq(\"track\",\"BOOKING_CONFIRMATION\",{partner:\"FastbookingDL\",refid:\"",["escape",["macro",149],7],"\",gbv:\"",["escape",["macro",150],7],"\",currency:\"",["escape",["macro",59],7],"\",order_id:\"",["escape",["macro",60],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,e,g,f,h,b,a,c){d.taq||(b=d.taq=function(){b.queue.push(arguments)},b.queue=[],\/bot|googlebot|crawler|spider|robot|crawling\/i.test(g.userAgent)||(a=e.createElement(f),a.async=!0,a.src=h,c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(a,c)))})(window,document,navigator,\"script\",\"\/\/static.tacdn.com\/js3\/taevents-c.js\");taq(\"init\",\"688076243\");taq(\"track\",\"",["escape",["macro",151],7],"\",{travel_start_date:\"",["escape",["macro",33],7],"\",travel_end_date:\"",["escape",["macro",104],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _gaq=_gaq||[];_gaq.push([\"_setAccount\",",["escape",["macro",54],8,16],"]);_gaq.push([\"_setDomainName\",\"book-secure.com\"]);_gaq.push([\"_setAllowLinker\",!0]);_gaq.push([\"_set\",\"currencyCode\",",["escape",["macro",59],8,16],"]);_gaq.push([\"_addTrans\",",["escape",["macro",60],8,16],",",["escape",["macro",35],8,16],",",["escape",["macro",15],8,16],",",["escape",["macro",15],8,16],"-",["escape",["macro",110],8,16],"]);\nfor(var booking=",["escape",["macro",13],8,16],",packages=booking.details.packages,id=0;id\u003Cpackages.length;id++){var sid=1+id,rate=packages[id].rate,accommodation=packages[id].accommodation.product,sku=[",["escape",["macro",35],8,16],",rate,accommodation].join(\"-\")+\"_\"+sid,price=packages[id].price,quantity=1;_gaq.push([\"_addItem\",",["escape",["macro",60],8,16],",sku,accommodation,rate,price,quantity])}var services=booking.details.services;\nfor(id=0;id\u003Cservices.length;id++){sid=1+id;var product=services[id].product;rate=services[id].rate;sku=[",["escape",["macro",35],8,16],",rate,product].join(\"-\")+\"_\"+sid;price=services[id].prices.gross;quantity=1;_gaq.push([\"_addItem\",",["escape",["macro",60],8,16],",sku,product,rate,price,quantity])}_gaq.push([\"_trackTrans\"]);\nif(\"undefined\"==typeof GoogleLoaded){(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/ssl\":\"http:\/\/www\")+\".google-analytics.com\/ga.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();var GoogleLoaded=1};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _gaq=_gaq||[];_gaq.push([\"_setAccount\",",["escape",["macro",67],8,16],"]);_gaq.push([\"_setDomainName\",\"book-secure.com\"]);_gaq.push([\"_setAllowLinker\",!0]);_gaq.push([\"_set\",\"currencyCode\",",["escape",["macro",59],8,16],"]);_gaq.push([\"_addTrans\",",["escape",["macro",60],8,16],",",["escape",["macro",35],8,16],",",["escape",["macro",15],8,16],",",["escape",["macro",15],8,16],"-",["escape",["macro",110],8,16],"]);\nfor(var booking=",["escape",["macro",13],8,16],",packages=booking.details.packages,id=0;id\u003Cpackages.length;id++){var sid=1+id,rate=packages[id].rate,accommodation=packages[id].accommodation.product,sku=[",["escape",["macro",35],8,16],",rate,accommodation].join(\"-\")+\"_\"+sid,price=packages[id].price,quantity=1;_gaq.push([\"_addItem\",",["escape",["macro",60],8,16],",sku,accommodation,rate,price,quantity])}var services=booking.details.services;\nfor(id=0;id\u003Cservices.length;id++){sid=1+id;var product=services[id].product;rate=services[id].rate;sku=[",["escape",["macro",35],8,16],",rate,product].join(\"-\")+\"_\"+sid;price=services[id].prices.gross;quantity=1;_gaq.push([\"_addItem\",",["escape",["macro",60],8,16],",sku,product,rate,price,quantity])}_gaq.push([\"_trackTrans\"]);\nif(\"undefined\"==typeof GoogleLoaded){(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/ssl\":\"http:\/\/www\")+\".google-analytics.com\/ga.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();var GoogleLoaded=1};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(c,d,a){var b=new Date;b.setTime(b.getTime()+864E5*a);a=\"expires\\x3d\"+b.toUTCString();document.cookie=c+\"\\x3d\"+d+\";\"+a}var refidCookie=",["escape",["macro",152],8,16],";setCookie(\"taclickid\",refidCookie,30);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(c,d,a){var b=new Date;b.setTime(b.getTime()+864E5*a);a=\"expires\\x3d\"+b.toUTCString();document.cookie=c+\"\\x3d\"+d+\";\"+a}var fclidCookie=",["escape",["macro",154],8,16],";setCookie(\"fclid\",fclidCookie,30);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript src=\"https:\/\/cdn.auth0.com\/js\/auth0\/9.0.1\/auth0.min.js\"\u003E\u003C\/script\u003E\n\u003Cscript\u003Efunction removeParam(a,b){var d=b.split(\"?\")[0];var e=-1!==b.indexOf(\"?\")?b.split(\"?\")[1]:\"\";if(\"\"!==e){var c=e.split(\"\\x26\");for(var f=c.length-1;0\u003C=f;--f)e=c[f].split(\"\\x3d\")[0],e===a\u0026\u0026c.splice(f,1);d=d+\"?\"+c.join(\"\\x26\")}return d}Date.now||(Date.now=function(){return(new Date).getTime()});function auth0_parseJwt(a){a=a.split(\".\")[1];a=a.replace(\"-\",\"+\").replace(\"_\",\"\/\");return JSON.parse(window.atob(a))}\nvar originalURL=",["escape",["macro",156],8,16],",guest_account_session=",["escape",["macro",157],8,16],",alteredURL=removeParam(\"ddtoken\",originalURL),profileSearchs=[],profileBookings=[],quicksearch=",["escape",["macro",16],8,16],";\"undefined\"!==typeof quicksearch\u0026\u0026(quicksearch.url=alteredURL,quicksearch.date_search=Date.now(),quicksearch.selection={},quicksearch.selection[0]={},quicksearch.stid=guest_account_session);\nif(\"step1\"===",["escape",["macro",5],8,16],")",["escape",["macro",158],8,16],"\u0026\u0026(quicksearch.selection[0].rate=",["escape",["macro",158],8,16],"),",["escape",["macro",159],8,16],"\u0026\u0026(quicksearch.selection[0].accommodation=",["escape",["macro",159],8,16],");else{var selection=",["escape",["macro",12],8,16],",concat=function(a,b){\"undefined\"!==typeof quicksearch\u0026\u0026(quicksearch.selection[b]={},quicksearch.selection[b].rate=a.package[0].rate,quicksearch.selection[b].accommodation=a.package[0].product)};\"undefined\"!==typeof selection\u0026\u0026selection.packages.forEach(concat)}profileSearchs.push(quicksearch);\nif(\"step4\"===",["escape",["macro",5],8,16],"){var booking=",["escape",["macro",13],8,16],",bookings={};\"undefined\"!==typeof booking\u0026\u0026(bookings.code=booking.confirmation,bookings.mail=booking.buyer.email,bookings.property=booking.property,profileBookings.push(bookings))}if(",["escape",["macro",160],8,16],")var auth0_token=",["escape",["macro",160],8,16],";\nif(\"undefined\"!==typeof auth0_token\u0026\u0026null!==auth0_token){var auth0_tokenDecoded=auth0_parseJwt(auth0_token),auth0_info={userID:auth0_tokenDecoded.sub,clientID:auth0_tokenDecoded.aud,domain:auth0_tokenDecoded.iss.replace(\/(^\\w+:|^)\\\/\\\/\/,\"\").replace(\/\\\/$\/,\"\"),scope:\"openid read:current_user update:current_user_identities create:current_user_metadata update:current_user_metadata delete:current_user_metadata create:current_user_device_credentials delete:current_user_device_credentials\"};localStorage.setItem(\"auth0_info\",\nJSON.stringify(auth0_info))}\"undefined\"===typeof auth0_info\u0026\u0026\"undefined\"!==typeof localStorage.getItem(\"auth0_info\")\u0026\u0026null!==localStorage.getItem(\"auth0_info\")\u0026\u0026(auth0_info=JSON.parse(localStorage.getItem(\"auth0_info\")));\nif(\"undefined\"!==typeof auth0_info.userID\u0026\u0026\"undefined\"===typeof auth0_info.accessToken){var webAuth=new auth0.WebAuth({domain:auth0_info.domain,clientID:auth0_info.clientID,responseType:\"token id_token\",audience:\"https:\/\/\"+auth0_info.domain+\"\/api\/v2\/\",scope:auth0_info.scope,redirectUri:\"https:\/\/www.book-secure.com\"});webAuth.checkSession({},function(a,b){console.log(a);if(!a){auth0_info.accessToken=b.accessToken;localStorage.setItem(\"auth0_info\",JSON.stringify(auth0_info));var d=new auth0.Management({domain:auth0_info.domain,\ntoken:auth0_info.accessToken});d.getUser(auth0_info.userID,function(a,c){if(!a\u0026\u0026\"undefined\"!==typeof c.user_metadata){var b=updateProfile(c);\"undefined\"!==typeof b\u0026\u0026null!==b\u0026\u0026\"\"!==b\u0026\u0026d.patchUserMetadata(auth0_info.userID,b,function(a,b){})}})}})}else if(\"undefined\"!==typeof auth0_info.accessToken){var auth0Manage=new auth0.Management({domain:auth0_info.domain,token:auth0_info.accessToken});auth0Manage.getUser(auth0_info.userID,function(a,b){if(!a\u0026\u0026\"undefined\"!==typeof b.user_metadata){var d=updateProfile(b);\n\"undefined\"!==typeof d\u0026\u0026null!==d\u0026\u0026\"\"!==d\u0026\u0026auth0Manage.patchUserMetadata(auth0_info.userID,d,function(a,b){})}})}\nfunction updateProfile(a){if(\"undefined\"===typeof a.user_metadata.profileSearchs){if(\"step4\"!==",["escape",["macro",5],8,16],")var b={profileSearchs:profileSearchs}}else{b=0;var d=!1,e=!1;for(c in a.user_metadata.profileSearchs)a.user_metadata.profileSearchs.hasOwnProperty(c)\u0026\u0026null!==a.user_metadata.profileSearchs[c]\u0026\u0026(\"undefined\"!==typeof a.user_metadata.profileSearchs[c].stid\u0026\u0026guest_account_session===a.user_metadata.profileSearchs[c].stid\u0026\u0026(d=c),!1===e?e=c:a.user_metadata.profileSearchs[c].date_search\u003Ca.user_metadata.profileSearchs[e].date_search\u0026\u0026\n(e=c),++b);!1!==d?\"step4\"===",["escape",["macro",5],8,16],"?a.user_metadata.profileSearchs.splice(d,1):a.user_metadata.profileSearchs[d]=quicksearch:\"step4\"!==",["escape",["macro",5],8,16],"\u0026\u0026(2\u003E=a.user_metadata.profileSearchs.length\u0026\u00260\u003Ca.user_metadata.profileSearchs.length||a.user_metadata.profileSearchs.splice(e,1),a.user_metadata.profileSearchs.push(quicksearch));b={profileSearchs:a.user_metadata.profileSearchs}}if(\"step4\"===",["escape",["macro",5],8,16],")if(\"undefined\"===typeof b\u0026\u0026(b={profileBookings:[],profileSearchs:a.user_metadata.profileSearchs}),\n\"undefined\"===typeof a.user_metadata.profileBookings||a.user_metadata.profileBookings===[])b.user_metadata.profileBookings.push(bookings);else{a:{var c=a.user_metadata.profileBookings;d=bookings.code;for(i=0;i\u003Cc.length;i++)if(c[i].code==d){c=!0;break a}c=void 0}!0!==c\u0026\u0026a.user_metadata.profileBookings.push(bookings);b.user_metadata.profileBookings=a.user_metadata.profileBookings}return b};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(c,d,a){var b=new Date;b.setTime(b.getTime()+864E5*a);a=\"expires\\x3d\"+b.toUTCString();document.cookie=c+\"\\x3d\"+d+\";\"+a}var refidCookie=",["escape",["macro",60],8,16],";setCookie(\"kayakid\",refidCookie,90);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,a,d,b,e){c[b]=c[b]||[];c=a.getElementsByTagName(d)[0];a=a.createElement(d);b=\"dataLayer\"!=b?\"\\x26l\\x3d\"+b:\"\";a.async=!0;a.src=\"https:\/\/www.googletagmanager.com\/gtm.js?id\\x3d\"+e+b;c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"dataLayerFB\",\"GTM-M7ZKWJ9\");\u003C\/script\u003E\n\n\n\n\u003Cnoscript\u003E\u003Ciframe src=\"https:\/\/www.googletagmanager.com\/ns.html?id=",["escape",["macro",148],12],")\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"\u003E\u003C\/iframe\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"triptease-remove-display\"\u003EPFConfig.deactivate();$(\"#triptease-placeholder\").destroy();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:{an:\"web-dedge.com\",cn:\"",["escape",["macro",162],7],"\",ln:\"",["escape",["macro",163],7],"\"}},{event:\"setEmail\",email:\"\"},{event:\"setSiteType\",type:\"\"},{event:\"viewItem\",item:\"",["escape",["macro",126],7],"_",["escape",["macro",33],7],"_",["escape",["macro",104],7],"\"},{event:\"viewSearch\",checkin_date:\"",["escape",["macro",33],7],"\",checkout_date:\"",["escape",["macro",104],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:{an:\"web-dedge.com\",cn:\"",["escape",["macro",162],7],"\",ln:\"",["escape",["macro",163],7],"\"}},{event:\"setEmail\",email:\"\"},{event:\"setSiteType\",type:\"\"},{event:\"viewItem\",item:\"",["escape",["macro",126],7],"_",["escape",["macro",33],7],"_",["escape",["macro",104],7],"\"},{event:\"viewSearch\",checkin_date:\"",["escape",["macro",33],7],"\",checkout_date:\"",["escape",["macro",104],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:{an:\"web-dedge.com\",cn:\"",["escape",["macro",162],7],"\",ln:\"",["escape",["macro",163],7],"\"}},{event:\"setEmail\",email:\"\"},{event:\"setSiteType\",type:\"\"},{event:\"viewSearch\",checkin_date:\"",["escape",["macro",33],7],"\",checkout_date:\"",["escape",["macro",104],7],"\"},{event:\"viewBasket\",item:[{id:\"",["escape",["macro",126],7],"_",["escape",["macro",33],7],"_",["escape",["macro",104],7],"\",price:",["escape",["macro",15],8,16],",quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(C){function q(a,g){var b=(65535\u0026a)+(65535\u0026g);return(a\u003E\u003E16)+(g\u003E\u003E16)+(b\u003E\u003E16)\u003C\u003C16|65535\u0026b}function t(a,g,b,n,p,r){a=q(q(g,a),q(n,r));p=a\u003C\u003Cp|a\u003E\u003E\u003E32-p;return q(p,b)}function h(a,g,b,n,p,r,h){return t(g\u0026b|~g\u0026n,a,g,p,r,h)}function k(a,g,b,n,p,h,k){return t(g\u0026n|b\u0026~n,a,g,p,h,k)}function l(a,g,b,n,p,h,k){return t(g^b^n,a,g,p,h,k)}function m(a,g,b,n,h,k,l){return t(b^(g|~n),a,g,h,k,l)}function u(a,g){var b,n,p,r,x;a[g\u003E\u003E5]|=128\u003C\u003Cg%32;a[14+(g+64\u003E\u003E\u003E9\u003C\u003C4)]=g;var c=1732584193,d=-271733879,e=-1732584194,\nf=271733878;for(b=0;b\u003Ca.length;b+=16)d=m(d=m(d=m(d=m(d=l(d=l(d=l(d=l(d=k(d=k(d=k(d=k(d=h(d=h(d=h(d=h(p=d,e=h(r=e,f=h(x=f,c=h(n=c,d,e,f,a[b],7,-680876936),d,e,a[b+1],12,-389564586),c,d,a[b+2],17,606105819),f,c,a[b+3],22,-1044525330),e=h(e,f=h(f,c=h(c,d,e,f,a[b+4],7,-176418897),d,e,a[b+5],12,1200080426),c,d,a[b+6],17,-1473231341),f,c,a[b+7],22,-45705983),e=h(e,f=h(f,c=h(c,d,e,f,a[b+8],7,1770035416),d,e,a[b+9],12,-1958414417),c,d,a[b+10],17,-42063),f,c,a[b+11],22,-1990404162),e=h(e,f=h(f,c=h(c,d,e,f,\na[b+12],7,1804603682),d,e,a[b+13],12,-40341101),c,d,a[b+14],17,-1502002290),f,c,a[b+15],22,1236535329),e=k(e,f=k(f,c=k(c,d,e,f,a[b+1],5,-165796510),d,e,a[b+6],9,-1069501632),c,d,a[b+11],14,643717713),f,c,a[b],20,-373897302),e=k(e,f=k(f,c=k(c,d,e,f,a[b+5],5,-701558691),d,e,a[b+10],9,38016083),c,d,a[b+15],14,-660478335),f,c,a[b+4],20,-405537848),e=k(e,f=k(f,c=k(c,d,e,f,a[b+9],5,568446438),d,e,a[b+14],9,-1019803690),c,d,a[b+3],14,-187363961),f,c,a[b+8],20,1163531501),e=k(e,f=k(f,c=k(c,d,e,f,a[b+13],\n5,-1444681467),d,e,a[b+2],9,-51403784),c,d,a[b+7],14,1735328473),f,c,a[b+12],20,-1926607734),e=l(e,f=l(f,c=l(c,d,e,f,a[b+5],4,-378558),d,e,a[b+8],11,-2022574463),c,d,a[b+11],16,1839030562),f,c,a[b+14],23,-35309556),e=l(e,f=l(f,c=l(c,d,e,f,a[b+1],4,-1530992060),d,e,a[b+4],11,1272893353),c,d,a[b+7],16,-155497632),f,c,a[b+10],23,-1094730640),e=l(e,f=l(f,c=l(c,d,e,f,a[b+13],4,681279174),d,e,a[b],11,-358537222),c,d,a[b+3],16,-722521979),f,c,a[b+6],23,76029189),e=l(e,f=l(f,c=l(c,d,e,f,a[b+9],4,-640364487),\nd,e,a[b+12],11,-421815835),c,d,a[b+15],16,530742520),f,c,a[b+2],23,-995338651),e=m(e,f=m(f,c=m(c,d,e,f,a[b],6,-198630844),d,e,a[b+7],10,1126891415),c,d,a[b+14],15,-1416354905),f,c,a[b+5],21,-57434055),e=m(e,f=m(f,c=m(c,d,e,f,a[b+12],6,1700485571),d,e,a[b+3],10,-1894986606),c,d,a[b+10],15,-1051523),f,c,a[b+1],21,-2054922799),e=m(e,f=m(f,c=m(c,d,e,f,a[b+8],6,1873313359),d,e,a[b+15],10,-30611744),c,d,a[b+6],15,-1560198380),f,c,a[b+13],21,1309151649),e=m(e,f=m(f,c=m(c,d,e,f,a[b+4],6,-145523070),d,e,a[b+\n11],10,-1120210379),c,d,a[b+2],15,718787259),f,c,a[b+9],21,-343485551),c=q(c,n),d=q(d,p),e=q(e,r),f=q(f,x);return[c,d,e,f]}function y(a){var g,b=\"\",h=32*a.length;for(g=0;g\u003Ch;g+=8)b+=String.fromCharCode(a[g\u003E\u003E5]\u003E\u003E\u003Eg%32\u0026255);return b}function v(a){var g,b=[];b[(a.length\u003E\u003E2)-1]=void 0;for(g=0;g\u003Cb.length;g+=1)b[g]=0;var h=8*a.length;for(g=0;g\u003Ch;g+=8)b[g\u003E\u003E5]|=(255\u0026a.charCodeAt(g\/8))\u003C\u003Cg%32;return b}function z(a){var g,b=\"0123456789abcdef\",h=\"\";for(g=0;g\u003Ca.length;g+=1){var k=a.charCodeAt(g);h+=b.charAt(k\u003E\u003E\u003E\n4\u002615)+b.charAt(15\u0026k)}return h}function A(a){a=unescape(encodeURIComponent(a));return a=y(u(v(a),8*a.length))}function B(a,g){var b=unescape(encodeURIComponent(a));var h=unescape(encodeURIComponent(g));var k,l=v(b),m=[],c=[];m[15]=c[15]=void 0;16\u003Cl.length\u0026\u0026(l=u(l,8*b.length));for(b=0;16\u003Eb;b+=1)m[b]=909522486^l[b],c[b]=1549556828^l[b];return h=(k=u(m.concat(v(h)),512+8*h.length),y(u(c.concat(k),640)))}function w(a,g,b){return g?b?B(g,a):z(B(g,a)):b?A(a):z(A(a))}\"function\"==typeof define\u0026\u0026define.amd?\ndefine(function(){return w}):\"object\"==typeof module\u0026\u0026module.exports?module.exports=w:C.md5=w}(this);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];\nwindow.criteo_q.push({event:\"setAccount\",account:{an:\"web-dedge.com\",cn:\"",["escape",["macro",162],7],"\",ln:\"",["escape",["macro",163],7],"\"}},{event:\"setEmail\",email:md5(",["escape",["macro",141],8,16],")},{event:\"setSiteType\",type:\"\"},{event:\"viewSearch\",checkin_date:\"",["escape",["macro",70],7],"\",checkout_date:\"",["escape",["macro",71],7],"\"},{event:\"trackTransaction\",id:\"",["escape",["macro",60],7],"\",new_customer:0,currency:\"",["escape",["macro",59],7],"\",item:[{id:\"",["escape",["macro",126],7],"_",["escape",["macro",70],7],"_",["escape",["macro",71],7],"\",price:",["escape",["macro",15],8,16],",\nquantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,a,d,b,e){c[b]=c[b]||[];c=a.getElementsByTagName(d)[0];a=a.createElement(d);b=\"dataLayer\"!=b?\"\\x26l\\x3d\"+b:\"\";a.async=!0;a.src=\"https:\/\/www.googletagmanager.com\/gtm.js?id\\x3d\"+e+b;c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"dataLayerFB\",",["escape",["macro",164],8,16],");\u003C\/script\u003E\n\n\n\n\u003Cnoscript\u003E\u003Ciframe src=\"https:\/\/www.googletagmanager.com\/ns.html?id=",["escape",["macro",148],12],")\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"\u003E\u003C\/iframe\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":130
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",142],7],"\");fbq(\"track\",\"PageView\");\nfbq(\"track\",\"AddToCart\",{content_type:[\"product\",\"hotel\"],content_ids:[\"",["escape",["macro",143],7],"\"],checkin_date:\"",["escape",["macro",33],7],"\",checkout_date:\"",["escape",["macro",104],7],"\",destination:[\"",["escape",["macro",28],7],"\"],value:0,currency:\"",["escape",["macro",7],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",142],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\n  \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",142],12],"\u0026amp;ev=AddToCart\u0026amp;cd[content_type]=product\u0026amp;\ncd[content_ids]=",["escape",["macro",143],12],"\u0026amp;cd[checkin_date]=",["escape",["macro",33],12],"\u0026amp;cd[checkout_date]=",["escape",["macro",104],12],"\u0026amp;cd[destination]=",["escape",["macro",28],12],"\u0026amp;cd[value]=0\u0026amp;cd[currency]=",["escape",["macro",7],12],"\"\u003E\n\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,g,a,b,c){d.fastbookingCall||(a=d.fastbookingCall=function(){a.queue.push(arguments)},a.loaded=!0,a.version=\"0.0\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=g,c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\",\"https:\/\/fbtrackercl.services.fastbooking.com\/user.js\");var source=",["escape",["macro",165],8,16],",hotelId=",["escape",["macro",126],8,16],",url=",["escape",["macro",155],8,16],",referer=",["escape",["macro",39],8,16],";fastbookingCall(\"session\",void 0,source,hotelId,url,referer);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,g,a,b,c){d.fastbookingCall||(a=d.fastbookingCall=function(){a.queue.push(arguments)},a.loaded=!0,a.version=\"0.0\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=g,c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\",\"https:\/\/fbtrackercl.services.fastbooking.com\/user.js\");var bookingId=",["escape",["macro",60],8,16],";fastbookingCall(\"booking\",bookingId);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/tag.yieldoptimizer.com\/ps\/ps?t=s\u0026amp;p=3209\u0026amp;pg=",["escape",["macro",5],12],"\u0026amp;ue=\u0026amp;hcy=",["escape",["macro",28],12],"\u0026amp;hst=",["escape",["macro",166],12],"\u0026amp;hcr=",["escape",["macro",29],12],"\u0026amp;hid=",["escape",["macro",33],12],"\u0026amp;hod=",["escape",["macro",104],12],"\u0026amp;hnn=",["escape",["macro",19],12],"\u0026amp;hna=",["escape",["macro",21],12],"\u0026amp;hnc=",["escape",["macro",22],12],"\u0026amp;hni=\u0026amp;hnr=",["escape",["macro",18],12],"\u0026amp;hcd=",["escape",["macro",35],12],"\u0026amp;hnm=",["escape",["macro",23],12],"\u0026amp;haf=\u0026amp;htf=",["escape",["macro",15],12],"\u0026amp;cu=",["escape",["macro",59],12],"\u0026amp;hcf=",["escape",["macro",60],12],"\u0026amp;hcx=\u0026amp;hhd=\u0026amp;hrm=",["escape",["macro",167],12],"\u0026amp;hsr=",["escape",["macro",168],12],"\u0026amp;\"\u003E\u003C\/script\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/tag.yieldoptimizer.com\/ps\/ps?t=s\u0026amp;p=3209\u0026amp;pg=",["escape",["macro",5],12],"\u0026amp;ue=\u0026amp;hcy=",["escape",["macro",28],12],"\u0026amp;hst=",["escape",["macro",166],12],"\u0026amp;hcr=",["escape",["macro",29],12],"\u0026amp;hid=",["escape",["macro",70],12],"\u0026amp;hod=",["escape",["macro",71],12],"\u0026amp;hnn=",["escape",["macro",85],12],"\u0026amp;hna=",["escape",["macro",72],12],"\u0026amp;hnc=",["escape",["macro",73],12],"\u0026amp;hni=\u0026amp;hnr=",["escape",["macro",76],12],"\u0026amp;hcd=",["escape",["macro",35],12],"\u0026amp;hnm=",["escape",["macro",23],12],"\u0026amp;haf=\u0026amp;htf=",["escape",["macro",15],12],"\u0026amp;cu=",["escape",["macro",59],12],"\u0026amp;hcf=",["escape",["macro",60],12],"\u0026amp;hcx=\u0026amp;hhd=\u0026amp;hrm=",["escape",["macro",169],12],"\u0026amp;hsr=",["escape",["macro",170],12],"\u0026amp;\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",142],7],"\");fbq(\"track\",\"PageView\");\nfbq(\"trackSingle\",\"",["escape",["macro",142],7],"\",\"ViewContent\",{content_type:\"hotel\",value:\"",["escape",["macro",15],7],"\",currency:\"",["escape",["macro",7],7],"\",content_ids:[\"",["escape",["macro",143],7],"\"],checkin_date:\"",["escape",["macro",33],7],"\",checkout_date:\"",["escape",["macro",104],7],"\",city:\"",["escape",["macro",28],7],"\",region:\"",["escape",["macro",29],7],"\",country:\"",["escape",["macro",29],7],"\",num_adults:",["escape",["macro",21],8,16],",num_children:",["escape",["macro",22],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"26036953\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push(\"event\",\"booking\",{event_category:\"booking\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"triptease-remove-display\"\u003Edocument.querySelector(\".price-fighter.price-fighter-widget\").remove();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/customs.affilired.com\/track\/?merchant\\x3d",["escape",["macro",171],7],"\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" id=\"visitor_id\" step=\"header\" data-gtmsrc=\"https:\/\/scripts.guestinbox.com\/base_gtm.js?hotel_ref=",["escape",["macro",172],12],"\" charset=\"utf-8\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" id=\"booking_script\" data-gtmsrc=\"https:\/\/scripts.guestinbox.com\/availpro-gtm.js?hotel_ref=",["escape",["macro",172],12],"\u0026amp;ref=",["escape",["macro",60],12],"\u0026amp;amount=",["escape",["macro",15],12],"\u0026amp;currency=",["escape",["macro",59],12],"\u0026amp;mail=",["escape",["macro",141],12],"\" charset=\"utf-8\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"",["escape",["macro",60],7],"\",cookieValue=\"",["escape",["macro",60],7],"\",cookiePath=\"\/\",expirationTime=31536E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);expirationTime=date.toUTCString();document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; expires\\x3d\"+expirationTime+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _targetHotels=\"FRAS29 FRCH357 FRCI2132 FRCO390 FREV788 FREX3830 FRFP713 FRFR1013 FRFR1014 FRFR1016 FRFR1017 FRFR1018 FRFR1042 FRFR1082 FRFR1179 FRFR1249 FRFR1304 FRFR1314 FRFR1412 FRFR1433 FRFR1434 FRFR1597 FRFR1646 FRFR1671 FRFR1720 FRFR1735 FRFR1748 FRFR1749 FRFR1923 FRFR2251 FRFR2381 FRFR2437 FRFR2440 FRFR2441 FRFR2442 FRFR2443 FRFR2478 FRFR2479 FRFR2480 FRFR2481 FRFR2482 FRFR2486 FRFR2487 FRFR2488 FRFR2489 FRFR2490 FRFR2491 FRFR2492 FRFR2494 FRFR3562 FRFR3588 FRFR3660 FRFR3781 FRFR3791 FRFR3793 FRFR3808 FRFR3829 FRFR3837 FRFR3839 FRFR3840 FRFR3841 FRFR3842 FRFR3867 FRFR3893 FRFR3894 FRFR3895 FRFR3897 FRFR3898 FRFR3899 FRFR3900 FRFR3901 FRFR3902 FRFR3903 FRFR3905 FRFR3912 FRFR3926 FRFR3932 FRFR3937 FRFR3938 FRFR3940 FRFR3941 FRFR3942 FRFR3943 FRFR3944 FRFR4116 FRFR4134 FRFR4205 FRFR4209 FRFR4250 FRFR4345 FRFR4384 FRFR4411 FRFR4437 FRFR4453 FRFR4470 FRFR4482 FRFR4522 FRFR4528 FRFR4529 FRFR4557 FRFR4573 FRFR4602 FRFR4604 FRFR4629 FRFR4637 FRFR4642 FRFR4652 FRFR4689 FRFR4699 FRFR4703 FRFR4756 FRFR4780 FRFR4800 FRFR4926 FRFR564 FRFR565 FRFR569 FRFR570 FRFR571 FRFR655 FRFR660 FRFR666 FRFR894 FRFR981 FRGL210 FRHO253 FRJD477 FRJD480 FRLO278 FRNE1137 FRNE2476 FRNE539 FRNE541 FRNE545 FRNE547 FRNE548 FRS0686 FRSA4054 FRSA4055 FRSA4056 FRSA4057 FRSB1414 FRSB1607 FRSB1724 FRSB721 FRSB763 FRSB856 FRSF1333 FRSF1335 FRSF1337 FRSF1339 FRSF1341 FRSF1342 FRSF1343 FRSF1345 FRSF1346 FRSF1349 FRSF1351 FRSF1352 FRSF1388 FRSF1471 FRSF1475 FRSF1479 FRSF2172 FRWA4049\".split(\" \");\nif(_targetHotels.includes(",["escape",["macro",126],8,16],")){var _i=document.createElement(\"img\");_i.src=\"https:\/\/ads.avads.net\/v1\/tracking?type\\x3dbehavior\\x26owner\\x3ddedge\\x26act\\x3dbuy\\x26cur\\x3d978\\x26market\\x3dFR\\x26lang\\x3dfr-FR\\x26pr\\x3d",["escape",["macro",15],7],"\\x26trId\\x3d",["escape",["macro",60],7],"\\x26id\\x3d",["escape",["macro",126],7],"\";_i.width=\"0\";_i.height=\"0\";_i.border=\"0\";_i.style.display=\"block\";_i.style.padding=\"0px\";_i.style.margin=\"0px\";document.body.appendChild(_i)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _targetHotels=\"FRAS29 FRCH357 FRCI2132 FRCO390 FREV788 FREX3830 FRFP713 FRFR1013 FRFR1014 FRFR1016 FRFR1017 FRFR1018 FRFR1042 FRFR1082 FRFR1179 FRFR1249 FRFR1304 FRFR1314 FRFR1412 FRFR1433 FRFR1434 FRFR1597 FRFR1646 FRFR1671 FRFR1720 FRFR1735 FRFR1748 FRFR1749 FRFR1923 FRFR2251 FRFR2381 FRFR2437 FRFR2440 FRFR2441 FRFR2442 FRFR2443 FRFR2478 FRFR2479 FRFR2480 FRFR2481 FRFR2482 FRFR2486 FRFR2487 FRFR2488 FRFR2489 FRFR2490 FRFR2491 FRFR2492 FRFR2494 FRFR3562 FRFR3588 FRFR3660 FRFR3781 FRFR3791 FRFR3793 FRFR3808 FRFR3829 FRFR3837 FRFR3839 FRFR3840 FRFR3841 FRFR3842 FRFR3867 FRFR3893 FRFR3894 FRFR3895 FRFR3897 FRFR3898 FRFR3899 FRFR3900 FRFR3901 FRFR3902 FRFR3903 FRFR3905 FRFR3912 FRFR3926 FRFR3932 FRFR3937 FRFR3938 FRFR3940 FRFR3941 FRFR3942 FRFR3943 FRFR3944 FRFR4116 FRFR4134 FRFR4205 FRFR4209 FRFR4250 FRFR4345 FRFR4384 FRFR4411 FRFR4437 FRFR4453 FRFR4470 FRFR4482 FRFR4522 FRFR4528 FRFR4529 FRFR4557 FRFR4573 FRFR4602 FRFR4604 FRFR4629 FRFR4637 FRFR4642 FRFR4652 FRFR4689 FRFR4699 FRFR4703 FRFR4756 FRFR4780 FRFR4800 FRFR4926 FRFR564 FRFR565 FRFR569 FRFR570 FRFR571 FRFR655 FRFR660 FRFR666 FRFR894 FRFR981 FRGL210 FRHO253 FRJD477 FRJD480 FRLO278 FRNE1137 FRNE2476 FRNE539 FRNE541 FRNE545 FRNE547 FRNE548 FRS0686 FRSA4054 FRSA4055 FRSA4056 FRSA4057 FRSB1414 FRSB1607 FRSB1724 FRSB721 FRSB763 FRSB856 FRSF1333 FRSF1335 FRSF1337 FRSF1339 FRSF1341 FRSF1342 FRSF1343 FRSF1345 FRSF1346 FRSF1349 FRSF1351 FRSF1352 FRSF1388 FRSF1471 FRSF1475 FRSF1479 FRSF2172 FRWA4049\".split(\" \");\nif(_targetHotels.includes(",["escape",["macro",126],8,16],")){var _i=document.createElement(\"img\");_i.src=\"https:\/\/ads.avads.net\/v1\/tracking?type\\x3dbehavior\\x26owner\\x3ddedge\\x26act\\x3dview\\x26market\\x3dFR\\x26lang\\x3dfr-FR\\x26id\\x3d",["escape",["macro",126],7],"\";_i.width=\"0\";_i.height=\"0\";_i.border=\"0\";_i.style.display=\"block\";_i.style.padding=\"0px\";_i.style.margin=\"0px\";document.body.appendChild(_i)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=",["escape",["macro",97],8,16],"-0+1;document.cookie=\"PageCount\\x3d\"+a+\";path\\x3d\/;\"})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a={hd1:\"",["escape",["macro",33],7],"\",hd2:\"",["escape",["macro",104],7],"\",hc1:\"",["escape",["macro",28],7],"\",hs1:\"",["escape",["macro",28],7],"\",hpr:\"",["escape",["macro",23],7],"\",hr:\"",["escape",["macro",18],7],"\",hpid:\"",["escape",["macro",35],7],"\",t:\"",["escape",["macro",17],7],"\"},c=[],d=[],e=[],b=document.createElement(\"script\"),f={vid:\"hot\",et:\"hs\"};for(key in f)a[key]=f[key];for(key in e)c.push(a[e[key]]);Params.cid=c.join(\"|\");for(key in a)d.push(key+\"\\x3d\"+encodeURIComponent(a[key]));b.type=\"text\/javascript\";b.async=!0;b.src=\"https:\/\/beacon.sojern.com\/pixel\/p\/",["escape",["macro",174],7],"?f_v\\x3dv6_js\\x26p_v\\x3d1\\x26\"+\nd.join(\"\\x26\");(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(b)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":592
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a={hd1:\"",["escape",["macro",33],7],"\",hd2:\"",["escape",["macro",104],7],"\",hc1:\"",["escape",["macro",28],7],"\",hs1:\"",["escape",["macro",28],7],"\",hpr:\"",["escape",["macro",23],7],"\",hr:\"",["escape",["macro",18],7],"\",hpid:\"",["escape",["macro",35],7],"\",t:\"",["escape",["macro",17],7],"\",hp:\"",["escape",["macro",110],7],"\",hcu:\"",["escape",["macro",7],7],"\"},c=[],d=[],e=[],b=document.createElement(\"script\"),f={vid:\"hot\",et:\"hcart\"};for(key in f)a[key]=f[key];for(key in e)c.push(a[e[key]]);a.cid=c.join(\"|\");for(key in a)d.push(key+\"\\x3d\"+encodeURIComponent(a[key]));\nb.type=\"text\/javascript\";b.async=!0;b.src=\"https:\/\/beacon.sojern.com\/pixel\/p\/",["escape",["macro",175],7],"?f_v\\x3dv6_js\\x26p_v\\x3d1\\x26\"+d.join(\"\\x26\");(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(b)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":593
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a={hd1:\"",["escape",["macro",70],7],"\",hd2:\"",["escape",["macro",71],7],"\",hc1:\"",["escape",["macro",177],7],"\",hs1:\"",["escape",["macro",177],7],"\",hpr:\"",["escape",["macro",178],7],"\",hr:\"",["escape",["macro",76],7],"\",hpid:\"",["escape",["macro",178],7],"\",t:\"",["escape",["macro",74],7],"\",hp:\"",["escape",["macro",110],7],"\",hcu:\"",["escape",["macro",59],7],"\",hconfno:\"",["escape",["macro",60],7],"\"},c=[],d=[],e=[],b=document.createElement(\"script\"),f={vid:\"hot\",et:\"hc\"};for(key in f)a[key]=f[key];for(key in e)c.push(a[e[key]]);a.cid=c.join(\"|\");for(key in a)d.push(key+\n\"\\x3d\"+encodeURIComponent(a[key]));b.type=\"text\/javascript\";b.async=!0;b.src=\"https:\/\/beacon.sojern.com\/pixel\/p\/",["escape",["macro",176],7],"?f_v\\x3dv6_js\\x26p_v\\x3d1\\x26\"+d.join(\"\\x26\");(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(b)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":594
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.duetto={appId:\"",["escape",["macro",179],7],"\",tld:\"",["escape",["macro",45],7],"\",properties:[[\"h\",\"",["escape",["macro",35],7],"\"]],events:[{t:\"b\",b:\"",["escape",["macro",60],7],"\",rt:\"",["escape",["macro",169],7],"\",rc:\"",["escape",["macro",170],7],"\",r:\"",["escape",["macro",15],7],"\",na:\"",["escape",["macro",72],7],"\",nc:\"",["escape",["macro",73],7],"\",sd:\"",["escape",["macro",70],7],"\",ed:\"",["escape",["macro",71],7],"\"}]};\n(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"capture.duettoresearch.com\/assets\/js\/duetto\/duetto.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":610
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.duetto={appId:\"",["escape",["macro",179],7],"\",tld:\"",["escape",["macro",45],7],"\",properties:[[\"h\",\"",["escape",["macro",35],7],"\"]],events:[{t:\"s\",lr:\"\",hr:\"\",sd:\"",["escape",["macro",33],7],"\",ed:\"",["escape",["macro",104],7],"\"},{t:\"q\",qq:[{r:\"",["escape",["macro",180],7],"\",rt:\"",["escape",["macro",181],7],"\",rc:\"",["escape",["macro",182],7],"\"}],sd:\"",["escape",["macro",33],7],"\",ed:\"",["escape",["macro",104],7],"\"}]};\n(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"capture.duettoresearch.com\/assets\/js\/duetto\/duetto.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":612
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.duetto={appId:\"",["escape",["macro",179],7],"\",tld:\"",["escape",["macro",45],7],"\",properties:[[\"h\",\"",["escape",["macro",35],7],"\"]],events:[{t:\"d\",sd:\"",["escape",["macro",33],7],"\",ed:\"",["escape",["macro",104],7],"\"}]};(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"capture.duettoresearch.com\/assets\/js\/duetto\/duetto.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":613
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cstyle type=\"text\/css\"\u003E\n.fb-font-light {\n  font-family: mplus-1p-light, 'Segoe UI', Roboto, Arial, Helvetica, 'Helvetica Neue';\n}\nbody {\n  font-family: mplus-1p-regular, Arial, Helvetica, 'Helvetica Neue', 'Segoe UI', Roboto;  \n}\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":618
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cstyle type=\"text\/css\"\u003E\n.fb-font-light {\n  font-family: Arial, Helvetica, 'Helvetica Neue';\n}\nbody {\n  font-family: Arial, Helvetica, 'Helvetica Neue', 'Segoe UI', Roboto;  \n}\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":619
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Action Trackings"
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"\\bUA-\\d{4,10}-\\d{1,4}\\b"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"step4"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"Pageview"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"\\w{8}\\-\\w{4}\\-\\w{4}\\-\\w{4}\\-\\w{12}"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"\\bUA-\\d{4,10}-\\d{1,4}\\b"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"step1"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Pageview"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"^\\d{1,10}$"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"^\\d{1,15}$"
    },{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":"^\\d{1,15}$"
    },{
      "function":"_re",
      "arg0":["macro",67],
      "arg1":"\\bUA-\\d{4,10}-\\d{1,4}\\b"
    },{
      "function":"_eq",
      "arg0":["macro",68],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",80],
      "arg1":"blockTransaction"
    },{
      "function":"_eq",
      "arg0":["macro",83],
      "arg1":"blockTransaction"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"blockTransaction"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"blockTransaction"
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"cancel-confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"\\bUA-\\d{4,10}-\\d{1,4}\\b"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"step0"
    },{
      "function":"_gt",
      "arg0":["macro",97],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"quotation"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"Quotation"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"step1"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"System Response"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"FB-PACK-PPC-SITE-Wego"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"AddPackage"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"Action Trackings"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"AddService"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"step3"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"datacollect check"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"PurchaseError"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"step1-total-unavailability"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"Loyalty|GHS"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"cnhon27156|cnhon27154|frpar31719"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"step4"
    },{
      "function":"_eq",
      "arg0":["macro",125],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"step4"
    },{
      "function":"_re",
      "arg0":["macro",127],
      "arg1":"\\w{32}"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"step1|step2|step3|step4"
    },{
      "function":"_re",
      "arg0":["macro",130],
      "arg1":"\\w{30,40}"
    },{
      "function":"_eq",
      "arg0":["macro",131],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",132],
      "arg1":"NaN|undefined"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"^$"
    },{
      "function":"_eq",
      "arg0":["macro",133],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",134],
      "arg1":"undefined|Members|CAMP|camp"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"System Response"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"quick search"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"apply criteria"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"basket"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"validate"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"currency change"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"language change"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"step1"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"frsix25500|frsix25498|frsix25497|frban25495|frsix25496"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"step3"
    },{
      "function":"_re",
      "arg0":["macro",142],
      "arg1":"^\\d{10,}$"
    },{
      "function":"_re",
      "arg0":["macro",144],
      "arg1":"^\\d{1,15}$"
    },{
      "function":"_eq",
      "arg0":["macro",145],
      "arg1":"confirm"
    },{
      "function":"_re",
      "arg0":["macro",148],
      "arg1":"^GTM-.*$"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",149],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"step1|step2|step3"
    },{
      "function":"_eq",
      "arg0":["macro",152],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",153],
      "arg1":"redirect.official-rates.com"
    },{
      "function":"_eq",
      "arg0":["macro",154],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",155],
      "arg1":"ddtoken="
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"step2"
    },{
      "function":"_re",
      "arg0":["macro",161],
      "arg1":"thphu18547|jpkyo28141|mypor18799|idbal17927|idbal29145|mykua10253|jptok27374|jphok27293|freng27827|frmar10183|deber30919|itven15284|fivan10095|dedre30920|isrey31610|esbar13423|aedub27560|ausyd31087|twkao14711|mqsai31156"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"step1-partial-unavailability|step1-total-unavailability"
    },{
      "function":"_re",
      "arg0":["macro",164],
      "arg1":"^GTM-.*$"
    },{
      "function":"_eq",
      "arg0":["macro",165],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",148],
      "arg1":"GTM-MRLJRK"
    },{
      "function":"_re",
      "arg0":["macro",171],
      "arg1":"^\\d{1,15}$"
    },{
      "function":"_eq",
      "arg0":["macro",172],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",174],
      "arg1":"^\\d{3,}$"
    },{
      "function":"_re",
      "arg0":["macro",175],
      "arg1":"^\\d{3,}$"
    },{
      "function":"_re",
      "arg0":["macro",176],
      "arg1":"^\\d{3,}$"
    },{
      "function":"_eq",
      "arg0":["macro",179],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"vi_VN"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"vnhue27385"
    }],
  "rules":[
    [["if",0],["add",1]],
    [["if",1,4],["unless",2,3],["add",2]],
    [["if",4,5],["add",3]],
    [["if",3,4,5],["add",4]],
    [["if",4,6],["unless",3,7],["add",5]],
    [["if",8,11],["unless",9,10],["add",6]],
    [["if",3,4,12],["add",7]],
    [["if",3,4,13],["add",8]],
    [["if",4,14],["add",9,27]],
    [["if",0,6],["unless",7],["add",10]],
    [["if",4,15],["unless",3,16],["add",11]],
    [["if",0,15],["unless",16],["add",12]],
    [["if",0,1],["unless",2],["add",13]],
    [["if",1,2,4],["unless",3],["add",14]],
    [["if",4,15,16],["unless",3],["add",15]],
    [["if",4,6,7],["unless",3],["add",16]],
    [["if",3,4],["unless",17],["add",17]],
    [["if",4],["unless",3],["add",18,77]],
    [["if",3,4],["add",19,23,28,72,76,78,86]],
    [["if",3,4,6],["unless",7],["add",20]],
    [["if",1,3,4],["unless",2],["add",21]],
    [["if",3,4,15],["unless",16],["add",22]],
    [["if",3,4],["unless",22],["add",24,66]],
    [["if",4,23,24],["add",25]],
    [["if",4,25,26],["add",26]],
    [["if",4,13],["add",27]],
    [["if",4,23,27],["add",29]],
    [["if",3,4,27,28],["add",30]],
    [["if",4],["add",0,88]],
    [["if",27,29,30,31,32],["add",31,37]],
    [["if",3,4,33],["add",32]],
    [["if",27,34,35],["add",33]],
    [["if",27,35,36],["add",34]],
    [["if",4,27,37],["add",35]],
    [["if",27,32,37,38],["unless",39],["add",36]],
    [["if",27,29,30,32,40],["add",38]],
    [["if",35,41,42],["add",39]],
    [["if",4,42],["add",40]],
    [["if",4,42,43],["add",41]],
    [["if",3,4,44],["add",42]],
    [["if",11,45],["unless",9,10],["add",43]],
    [["if",11,46,47],["add",44]],
    [["if",3,4,48],["add",45]],
    [["if",29,48,49,52,53,54],["unless",50,51],["add",46]],
    [["if",0,34,48],["add",47]],
    [["if",0,48,55,56],["add",47]],
    [["if",0,48,57,58],["add",47]],
    [["if",0,48,49,52,53,59],["unless",51],["add",48]],
    [["if",0,48,49,52,53,60],["unless",51],["add",48]],
    [["if",4,61],["unless",62],["add",49]],
    [["if",4,63],["unless",62],["add",50]],
    [["if",3,4],["unless",62],["add",51]],
    [["if",4,61,64],["add",52]],
    [["if",4,63,64],["add",53]],
    [["if",3,4,64],["add",54]],
    [["if",4,65],["add",55]],
    [["if",3,4,65,66],["add",56]],
    [["if",67,68],["add",57]],
    [["if",1,2,3,4],["add",58]],
    [["if",3,4],["unless",69],["add",59]],
    [["if",4,70],["add",60]],
    [["if",3,4,6,7],["add",61]],
    [["if",3,4,15,16],["add",62]],
    [["if",4,72],["unless",71],["add",63]],
    [["if",4],["unless",73],["add",64]],
    [["if",4,61,74],["add",65]],
    [["if",4,74,75],["add",65]],
    [["if",4,63,74],["add",65]],
    [["if",3,4,74],["add",65]],
    [["if",68,76],["add",67]],
    [["if",29,48,54,77],["add",68]],
    [["if",29,48,54],["unless",53],["add",68]],
    [["if",4,61],["add",69,87]],
    [["if",4,75],["add",70]],
    [["if",4,63],["add",71]],
    [["if",11,26,78],["add",73]],
    [["if",34,35,64],["add",74]],
    [["if",11,61],["unless",79],["add",75]],
    [["if",4,64,75],["add",79]],
    [["if",3,4],["unless",80],["add",80]],
    [["if",4,48,75],["add",81,81]],
    [["if",4,81],["add",82]],
    [["if",4],["unless",82],["add",83]],
    [["if",3,4],["unless",82],["add",84]],
    [["if",4,61,84],["add",89]],
    [["if",4,63,85],["add",90]],
    [["if",3,4,86],["add",91]],
    [["if",3,4],["unless",87],["add",92]],
    [["if",30,32],["unless",40,87,88,89],["add",93]],
    [["if",30,32,40],["unless",87,88,89],["add",94]],
    [["if",0,60,91],["unless",90],["add",95]],
    [["if",0,60,90,91],["add",96]],
    [["if",11,90,91],["add",96]],
    [["if",3,4,18],["block",19]],
    [["if",3,4,6,19],["unless",7],["block",20]],
    [["if",1,3,4,20],["unless",2],["block",21]],
    [["if",3,4,15,21],["unless",16],["block",22]],
    [["if",4,83],["block",85]]]
},
"runtime":[[50,"__asp",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],[52,"d",["require","makeTableMap"]],["c","adroll_adv_id",[17,[15,"a"],"customerId"]],["c","adroll_pix_id",[17,[15,"a"],"pixelId"]],[22,[21,[17,[15,"a"],"conversionValueInDollars"],[44]],[46,["c","adroll_conversion_value",[17,[15,"a"],"conversionValueInDollars"]],["c","adroll_currency",[30,[17,[15,"a"],"conversionValueCurrency"],"USD"]]]],[22,[17,[15,"a"],"customData"],[46,["c","adroll_custom_data",["d",[17,[15,"a"],"customData"],"key","value"]]]],[22,[17,[15,"a"],"segmentName"],[46,["c","adroll_segments",[17,[15,"a"],"segmentName"]]]],[22,[17,[15,"a"],"visitorEmail"],[46,["c","adroll_email",[17,[15,"a"],"visitorEmail"]]]],["c","__adroll_loaded",true],[52,"e","https://s.adroll.com/j/roundtrip.js"],["b",[15,"e"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[50,"__vei",[46,"a"],[52,"b",["require","injectScript"]],[22,[20,[2,[17,[15,"a"],"jsUrl"],"indexOf",[7,"http://"]],0],[46,[43,[15,"a"],"jsUrl",[0,"https://",[2,[17,[15,"a"],"jsUrl"],"slice",[7,7]]]]],[46,[22,[20,[2,[17,[15,"a"],"jsUrl"],"indexOf",[7,"//"]],0],[46,[43,[15,"a"],"jsUrl",[0,"https:",[17,[15,"a"],"jsUrl"]]]]]]],["b",[17,[15,"a"],"jsUrl"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"VeiJsLoaded"]]]
,"permissions":{"__asp":{"access_globals":{"keys":[{"key":"adroll_adv_id","read":true,"write":true,"execute":false},{"key":"adroll_pix_id","read":true,"write":true,"execute":false},{"key":"adroll_conversion_value","read":true,"write":true,"execute":false},{"key":"adroll_currency","read":true,"write":true,"execute":false},{"key":"adroll_custom_data","read":true,"write":true,"execute":false},{"key":"adroll_segments","read":true,"write":true,"execute":false},{"key":"adroll_email","read":true,"write":true,"execute":false},{"key":"__adroll_loaded","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/s.adroll.com\/j\/roundtrip.js"]}},"__vei":{"inject_script":{"urls":["https:\/\/*.veinteractive.com\/tags\/*","https:\/\/*.ve-interactive.cn\/tags\/*"]}}}

,"security_groups":{
"nonGoogleScripts":["__asp","__vei"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Rf:!0},ja={};try{ja.__proto__=ia;ha=ja.Rf;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.o={};this.m=!1;this.F={}};ra.prototype.get=function(a){return this.o["dust."+a]};ra.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.o[a]=b))};ra.prototype.has=function(a){return this.o.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.bc=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.o[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,g){if(b[f]){if(b[f].Tb+g>b[f].max)throw Error("Quota exceeded");b[f].Tb+=g}}var b={},c=void 0,d=void 0,e={ih:function(f){c=f},ve:function(){c&&a(c,1)},kh:function(f){d=f},Ba:function(f){d&&a(d,f)},Hh:function(f,g){b[f]=b[f]||{Tb:0};b[f].max=g},Jg:function(f){return b[f]&&b[f].Tb||0},reset:function(){b={}},qg:a};e.onFnConsume=e.ih;e.consumeFn=e.ve;e.onStorageConsume=e.kh;e.consumeStorage=e.Ba;e.setMax=e.Hh;e.getConsumed=e.Jg;e.reset=e.reset;e.consume=e.qg;return e};var wa=function(a,b){this.F=a;this.O=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.o=void 0};wa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.m)if(a.F.Ba(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
wa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ba(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};wa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};wa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var za=function(a){var b=new wa(a.F,a);a.o&&(b.o=a.o);b.O=a.O;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},La=function(a,b){for(var c=new Ka,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ma=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Na=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Pa=function(a){return Math.round(Number(a))||0},Qa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ra=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Sa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ta=function(){return(new Date).getTime()},Ka=function(){this.prefix="gtm.";this.values={}};Ka.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ka.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Wa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Xa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ya=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Za=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ab=function(a){for(var b=E,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},bb=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},cb=function(a){var b=[];Ma(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var db=function(a,b){ra.call(this);this.a=a;this.O=b};la(db,ra);db.prototype.toString=function(){return this.a};db.prototype.bc=function(){return new h(ta(this))};db.prototype.i=function(a,b){a.F.ve();return this.O.apply(fb(this,a),Array.prototype.slice.call(arguments,1))};var fb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ga(d)?gb(e,d):d};c.prototype.F=function(d){return hb(this.m,d)};c.prototype.o=function(){return b.F};return new c(a,b)};
db.prototype.Ea=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var hb=function(a,b){for(var c,d=0;d<b.length&&!(c=gb(a,b[d]),c instanceof pa);d++);return c},gb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof db))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var ib=function(){ra.call(this)};la(ib,ra);ib.prototype.bc=function(){return new h(ta(this))};var jb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,kb={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=jb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof db?n="Fn":l instanceof h?n="List":l instanceof ib&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(kb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var lb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,mb=function(a){if(null==a)return String(a);var b=lb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},nb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ob=function(a){if(!a||"object"!=mb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!nb(a,"constructor")&&!nb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||nb(a,b)},G=function(a,b){var c=b||("array"==mb(a)?[]:{}),d;for(d in a)if(nb(a,d)){var e=a[d];"array"==mb(e)?("array"!=mb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):ob(e)?(ob(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var qb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.bc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof ib){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof db){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),u=0;u<q.length;u++)q[u]=pb(q[u],b);var w=b?b.F:va(),v=new wa(w);b&&
(v.a=b.a);return f(g.i.apply(g,[v].concat(q)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},pb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Ga(g)||Na(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(ob(g)){var n=
new ib;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new db("",function(q){for(var u=Array.prototype.slice.call(arguments,0),w=0;w<u.length;w++)u[w]=qb(this.a(u[w]),b);return f((0,this.m.O)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var rb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.o().Ba(a.length+f.length);return new db(a,function(){return function(g){var k=za(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var t=hb(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.o();b.Ba(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ba(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.o(),c=new ib,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ba(g);c.set(e,f)}return c},undefined:function(){}};function sb(a,b){var c=gb(a,b);if(c instanceof pa||c instanceof db||c instanceof h||c instanceof ib||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var tb=function(){this.m=va();this.a=new wa(this.m)},ub=function(a,b,c){var d=new db(b,c);d.m=!0;a.a.set(b,d)};tb.prototype.Zb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};tb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=sb(this.a,arguments[c]);return b};
tb.prototype.o=function(a,b){var c=za(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=sb(c,arguments[e]);return d};var vb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var wb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=vb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=vb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var xb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),yb=new pa("break"),zb=new pa("continue"),Bb=function(a,b){return this.a(a)+this.a(b)},Cb=function(a,b){return this.a(a)&&this.a(b)},Db=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(xb,b))return pb(a[b].apply(a,vb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof db){var e=vb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(wb.supportedMethods,b)){var f=vb(c);f.unshift(this.m);
return wb[b].apply(a,f)}}if(a instanceof db||a instanceof ib){if(a.has(b)){var g=a.get(b);if(g instanceof db){var k=vb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof db?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,vb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Eb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Fb=function(a){var b=za(this.m),c=hb(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Gb=function(){return yb},Hb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Ib=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Jb=function(){return zb},Kb=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.set(a,this.a(f))},Lb=function(a,b){return this.a(a)/this.a(b)},Mb=function(a,b){return this.a(a)==this.a(b)},Nb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Ob(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=hb(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof ib||b instanceof h||b instanceof db)for(var g=b.bc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=hb(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){d.set(a,e);return d},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=za(d);ya(f,a,e,!0);return f},b,c)},Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=za(d);f.add(a,e);return f},b,c)},Tb=function(a){return this.m.get(this.a(a))},Ub=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof ib||a instanceof h||a instanceof db?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Vb=function(a,b){return this.a(a)>this.a(b)},Wb=function(a,b){return this.a(a)>=this.a(b)},Xb=function(a,b){return this.a(a)===this.a(b)},Yb=function(a,b){return this.a(a)!==this.a(b)},Zb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof pa)return e},$b=function(a,b){return this.a(a)<this.a(b)},ac=function(a,b){return this.a(a)<=
this.a(b)},bc=function(a,b){return this.a(a)%this.a(b)},cc=function(a,b){return this.a(a)*this.a(b)},dc=function(a){return-this.a(a)},ec=function(a){return!this.a(a)},fc=function(a,b){return this.a(a)!=this.a(b)},gc=function(){return null},hc=function(a,b){return this.a(a)||this.a(b)},ic=function(a,b){var c=this.a(a);this.a(b);return c},jc=function(a){return this.a(a)},kc=function(a){return Array.prototype.slice.apply(arguments)},lc=function(a){return new pa("return",this.a(a))},mc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof db||a instanceof h||a instanceof ib)&&a.set(b,c);return c},nc=function(a,b){return this.a(a)-this.a(b)},oc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},pc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},qc=function(a){a=this.a(a);return a instanceof db?"function":typeof a},rc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},sc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},tc=function(a){return~Number(this.a(a))},uc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},xc=function(a,b){return Number(this.a(a))&Number(this.a(b))},yc=function(a,b){return Number(this.a(a))^Number(this.a(b))},zc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Bc=function(){this.a=new tb;Ac(this)};Bc.prototype.Zb=function(a){return this.a.i(a)};
var Dc=function(a,b){return Cc.a.o(a,b)},Ac=function(a){function b(e,f){var g=d.a,k=String(f);rb.hasOwnProperty(e)&&ub(g,k||e,rb[e])}function c(e,f){ub(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,Bb);c(1,Cb);c(2,Db);c(3,Eb);c(53,Fb);c(4,Gb);c(5,Hb);c(52,Ib);c(6,Jb);c(9,Hb);c(50,Kb);c(10,Lb);c(12,Mb);c(13,Nb);c(47,Pb);c(54,Qb);c(55,Rb);c(15,Tb);c(16,Ub);c(17,Ub);c(18,Vb);c(19,Wb);c(20,Xb);c(21,Yb);c(22,Zb);c(23,$b);c(24,ac);c(25,bc);c(26,cc);c(27,
dc);c(28,ec);c(29,fc);c(45,gc);c(30,hc);c(32,ic);c(33,ic);c(34,jc);c(35,jc);c(46,kc);c(36,lc);c(43,mc);c(37,nc);c(38,oc);c(39,pc);c(40,qc);c(41,rc);c(42,sc);c(58,tc);c(57,uc);c(60,vc);c(61,wc);c(56,xc);c(62,yc);c(59,zc)},Fc=function(){var a=Cc,b=Ec();ub(a.a,"require",b)},Gc=function(a,b){a.a.a.O=b};
var Hc=[],Ic={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Jc=function(a){return Ic[a]},Kc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Oc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Pc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Qc=function(a){return Pc[a]};Hc[7]=function(a){return String(a).replace(Oc,Qc)};
Hc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Oc,Qc)+"'"}};var Xc=/['()]/g,Yc=function(a){return"%"+a.charCodeAt(0).toString(16)};Hc[12]=function(a){var b=
encodeURIComponent(String(a));Xc.lastIndex=0;return Xc.test(b)?b.replace(Xc,Yc):b};var Zc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,$c={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ad=function(a){return $c[a]};Hc[16]=function(a){return a};var cd;
var dd=[],ed=[],fd=[],gd=[],hd=[],id={},jd,kd,ld,md=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},nd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=id[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):cd(c,e,b)},pd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=od(a[e],b,c));
return d},qd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=id[b];return c?c.priorityOverride||0:0},od=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(od(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=dd[f];if(!g||b.dd(g))return;c[f]=!0;try{var k=pd(g,b,c);k.vtp_gtmEventId=b.id;d=nd(k,b);ld&&(d=ld.sg(d,k))}catch(x){b.Ne&&b.Ne(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[od(a[l],b,c)]=od(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=od(a[n],b,c);kd&&(m=m||r===kd.Mb);d.push(r)}return kd&&m?kd.wg(d):d.join("");case "escape":d=od(a[1],b,c);if(kd&&Ga(a[1])&&"macro"===a[1][0]&&kd.Vg(a))return kd.ph(d);d=String(d);for(var t=2;t<a.length;t++)Hc[a[t]]&&(d=Hc[a[t]](d));return d;case "tag":var q=a[1];if(!gd[q])throw Error("Unable to resolve tag reference "+q+".");return d={Ae:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var w=rd(u,b,c),v=!!a[4];return v||2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},rd=function(a,b,c){try{return jd(pd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var sd=function(){var a=function(b){return{toString:function(){return b}}};return{Id:a("convert_case_to"),Jd:a("convert_false_to"),Kd:a("convert_null_to"),Ld:a("convert_true_to"),Md:a("convert_undefined_to"),$h:a("debug_mode_metadata"),xa:a("function"),sf:a("instance_name"),wf:a("live_only"),yf:a("malware_disabled"),zf:a("metadata"),ai:a("original_vendor_template_id"),Df:a("once_per_event"),Td:a("once_per_load"),ae:a("setup_tags"),ce:a("tag_id"),de:a("teardown_tags")}}();var td=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(td,Error);function ud(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ud(a[c],b[c])}};var vd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(vd,Error);var wd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var yd=function(){return function(a,b){a instanceof vd||(a=new vd(a,xd));b&&a.a.push(b);throw a;}};function xd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var zd=null,Cd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];zd=Ad(a);for(var e=0;e<ed.length;e++){var f=ed[e],g=Bd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<gd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=zd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Ad=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=rd(fd[c],a));return b[c]}};var Dd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new td(c,d,g);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,g);Ed(f,b,d,g)}}}};var Jd=function(a){var b=Gd.w,c=this;this.i=new Dd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ma(a,function(f,g){var k={};Ma(g,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=md(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return nd(c)}catch(d){return{assert:function(e){throw new td(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new td(a,b,c)};var Nd=!1;var Od={};Od.Qh=Qa('');Od.Cg=Qa('');var Pd=Nd,Qd=Od.Cg,Rd=Od.Qh;
var ee=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},fe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ee(b,"/*")&&(b=b.slice(0,-2));ee(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ge=/^[a-z0-9-]+$/i,he=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ie=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ge.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!he.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var w=q.toLowerCase().indexOf(u.toLowerCase());
t=-1===w?!1:q.length===u.length?!0:q.length!==u.length+w?!1:"."===q[w-1]}if(t){var v=n.slice(n.indexOf("/"));k=fe(l.pathname+l.search,v)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var je,ke=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.eg&&(l["fix_"+m]=!0),l.Ce=l.Ce||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=k.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var w=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(w)return{tagName:q.tagName,T:q.T,content:w[1],length:w[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var u={};q[2].replace(e,function(w,v,x,y,A){var B=x||y||A||f.test(v)&&v||null,z=document.createElement("div");z.innerHTML=B;u[v]=z.textContent||z.innerText||B});return{tagName:q[1],T:u,Fb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var u=r[q]();return u?(u.type=u.type||q,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.Ce&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,w=[];w.Le=function(){return this[this.length-1]};w.fd=function(z){var D=this.Le();return D&&D.tagName&&D.tagName.toUpperCase()===z.toUpperCase()};w.rg=
function(z){for(var D=0,H;H=this[D];D++)if(H.tagName===z)return!0;return!1};var v=function(z){z&&"startTag"===z.type&&(z.Fb=q.test(z.tagName)||z.Fb);return z},x=t,y=function(){k="</"+w.pop().tagName+">"+k},A={startTag:function(z){var D=z.tagName;"TR"===D.toUpperCase()&&w.fd("TABLE")?(k="<TBODY>"+k,B()):l.ji&&u.test(D)&&w.rg(D)?w.fd(D)?y():(k="</"+z.tagName+">"+k,B()):z.Fb||w.push(z)},endTag:function(z){w.Le()?l.Eg&&!w.fd(z.tagName)?y():w.pop():l.Eg&&(x(),B())}},B=function(){var z=k,D=v(x());k=z;if(D&&
A[D.type])A[D.type](D)};t=function(){B();return v(x())}}();return{append:function(q){k+=q},wh:t,oi:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=k;k="";return q},ri:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.ui="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.si=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.s=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.T){var t=m.T[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Fb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;je=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,w=r&&r.length||0;for(u=0;u<w;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,
t){d(t,function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return m.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var k={Vf:a,Wf:a,Xf:a,Yf:a,fg:a,gg:function(r){return r},done:a,error:function(r){throw r;},zh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(q,u,w){var v="data-ps-"+u;if(2===arguments.length){var x=q.getAttribute(v);return b(x)?String(x):x}b(w)&&""!==w?q.setAttribute(v,
w):q.removeAttribute(v)}function t(q,u){var w=q.ownerDocument;e(this,{root:q,options:u,Gb:w.defaultView||w.parentWindow,Ra:w,qc:je("",{eg:!0}),Sc:[q],qd:"",rd:w.createElement(q.nodeName),Cb:[],Ha:[]});r(this.rd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ha,arguments);for(var q;!this.Vb&&this.Ha.length;)q=this.Ha.shift(),"function"===typeof q?this.lg(q):this.Bd(q)};t.prototype.lg=function(q){var u={type:"function",value:q.name||q.toString()};this.md(u);q.call(this.Gb,this.Ra);this.Re(u)};
t.prototype.Bd=function(q){this.qc.append(q);for(var u,w=[],v,x;(u=this.qc.wh())&&!(v=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)w.push(u);this.Vh(w);v&&this.Og(u);x&&this.Pg(u)};t.prototype.Vh=function(q){var u=this.ig(q);u.qe&&(u.bd=this.qd+u.qe,this.qd+=u.th,this.rd.innerHTML=u.bd,this.Sh())};t.prototype.ig=function(q){var u=this.Sc.length,w=[],v=[],x=[];c(q,function(y){w.push(y.text);if(y.T){if(!/^noscript$/i.test(y.tagName)){var A=
u++;v.push(y.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==y.T.id&&"ps-style"!==y.T.id&&x.push("atomicTag"===y.type?"":"<"+y.tagName+" data-ps-proxyof="+A+(y.Fb?" />":">"))}}else v.push(y.text),x.push("endTag"===y.type?y.text:"")});return{vi:q,raw:w.join(""),qe:v.join(""),th:x.join("")}};t.prototype.Sh=function(){for(var q,u=[this.rd];b(q=u.shift());){var w=1===q.nodeType;if(!w||!r(q,"proxyof")){w&&(this.Sc[r(q,"id")]=q,r(q,"id",null));var v=q.parentNode&&r(q.parentNode,"proxyof");
v&&this.Sc[v].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.Og=function(q){var u=this.qc.clear();u&&this.Ha.unshift(u);q.src=q.T.src||q.T.bi;q.src&&this.Cb.length?this.Vb=q:this.md(q);var w=this;this.Uh(q,function(){w.Re(q)})};t.prototype.Pg=function(q){var u=this.qc.clear();u&&this.Ha.unshift(u);q.type=q.T.type||q.T.TYPE||"text/css";this.Wh(q);u&&this.write()};t.prototype.Wh=function(q){var u=this.kg(q);this.Sg(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Ra.createTextNode(q.content)))};t.prototype.kg=function(q){var u=this.Ra.createElement(q.tagName);u.setAttribute("type",q.type);d(q.T,function(w,v){u.setAttribute(w,v)});return u};t.prototype.Sg=function(q){this.Bd('<span id="ps-style"/>');var u=this.Ra.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.md=function(q){q.lh=this.Ha;this.Ha=[];this.Cb.unshift(q)};t.prototype.Re=function(q){q!==this.Cb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Cb.shift(),this.write.apply(this,q.lh),!this.Cb.length&&this.Vb&&(this.md(this.Vb),this.Vb=null))};t.prototype.Uh=function(q,u){var w=this.jg(q),v=this.Jh(w),x=this.options.Vf;q.src&&(w.src=q.src,this.Eh(w,v?x:function(){u();x()}));try{this.Rg(w),q.src&&!v||u()}catch(y){this.options.error(y),u()}};t.prototype.jg=function(q){var u=this.Ra.createElement(q.tagName);d(q.T,function(w,v){u.setAttribute(w,v)});q.content&&(u.text=q.content);return u};t.prototype.Rg=function(q){this.Bd('<span id="ps-script"/>');
var u=this.Ra.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.Eh=function(q,u){function w(){q=q.onload=q.onreadystatechange=q.onerror=null}var v=this.options.error;e(q,{onload:function(){w();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(w(),u())},onerror:function(){var x={message:"remote script failed "+q.src};w();v(x);u()}})};t.prototype.Jh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.zh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var v=u.shift(),x;v&&(x=v[v.length-1],x.Wf(),v.stream=t.apply(null,v),x.Xf())}function t(v,x,y){function A(H){H=y.gg(H);w.write(H);y.Yf(H)}w=new n(v,y);w.id=q++;w.name=y.name||w.id;var B=v.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var D=w.Gb.onerror||a;w.Gb.onerror=function(H,M,O){y.error({mi:H+
" - "+M+":"+O});D.apply(w.Gb,arguments)};w.write(x,function(){e(B,z);w.Gb.onerror=D;y.done();w=null;r()});return w}var q=0,u=[],w=null;return e(function(v,x,y){"function"===typeof y&&(y={done:y});y=f(y,k);v=/^#/.test(v)?l.document.getElementById(v.substr(1)):v.li?v[0]:v;var A=[v,x,y];v.oh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};y.fg(A);u.push(A);w||r();return v.oh},{streams:{},ni:u,di:n})}();ke=l.postscribe}})();function le(a){return""+a}
function me(a,b){var c=[];return c};var ne=function(a,b){var c=new db(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},oe=function(a,b){var c=new ib,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,ne(a+"_"+d,e)):(Ea(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var pe=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new ib;return d=oe("AssertApiSubject",c)};var qe=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new ib;return d=oe("AssertThatSubject",c)};function re(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(qb(arguments[d],c));return pb(a.apply(null,b))}}var te=function(){for(var a=Math,b=se,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=re(a[e].bind(a)))}return c};var ue=function(a){var b;return b};var ve=function(a){var b;return b};var we=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var xe=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ye=function(a){F(this.i.a,["message:?string"],arguments);};var ze=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ia(a,b)};var Ae=function(){return(new Date).getTime()};var Be=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.dg.apply(null,Array.prototype.slice.call(arguments,1))};var Ce=function(){Be(this,"read_container_data");var a=new ib;a.set("containerId",'GTM-TX76XB');a.set("version",'317');a.set("environmentName",'');a.set("debugMode",Pd);a.set("previewMode",Rd);a.set("environmentMode",Qd);a.m=!0;return a};var De=function(a){return null===a?"null":a instanceof h?"array":a instanceof db?"function":typeof a};var Ee=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Pd||Rd)&&a.call(this,e.message)}}}return{parse:b(function(c){return pb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(qb(c))})}};var Fe=function(a){return Pa(qb(a,this.m))};var Ge=function(a){return Number(qb(a,this.m))};var He=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ie=function(a,b,c){var d=null,e=!1;F(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new ib;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof ib&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var se="floor ceil round max min abs pow sqrt".split(" ");var Je=function(){var a={};return{Kg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ih:function(b,c){a[b]=c},reset:function(){a={}}}},Ke=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Le=function(){this.a={}};Le.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Le.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?ne(a,b):oe(a,b)};function Me(){var a={};return a};var I={eb:"_ee",Qc:"_syn",ci:"_uei",Gc:"event_callback",Lb:"event_timeout",J:"gtag.config",ja:"allow_ad_personalization_signals",Hc:"restricted_data_processing",ab:"allow_google_signals",ka:"cookie_expires",Kb:"cookie_update",cb:"session_duration",la:"user_properties",wa:"transport_url",N:"ads_data_redaction"};I.Je=[I.ja,I.ab,I.Kb];I.Me=[I.ka,I.Lb,I.cb];var E=window,K=document,Ne=navigator,Oe=K.currentScript&&K.currentScript.src,Pe=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},Qe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Re=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Qe(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=K.getElementsByTagName("script")[0]||K.body||K.head;l.parentNode.insertBefore(d,l);return d},Se=function(){if(Oe){var a=Oe.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Te=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||
K.body||K.head;d.parentNode.insertBefore(c,d);Qe(c,b);void 0!==a&&(c.src=a);return c},Ue=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ve=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},We=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){E.setTimeout(a,0)},Xe=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ye=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ze=function(a){var b=K.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},$e=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},af=function(a){Ne.sendBeacon&&Ne.sendBeacon(a)||Ue(a)},bf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf={},R=function(a,b){cf[a]=cf[a]||[];cf[a][b]=!0},df=function(a){for(var b=[],c=cf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ef=[];function ff(){var a=Pe("google_tag_data",{});a.ics||(a.ics={entries:{},set:gf,update:hf,addListener:jf,notifyListeners:kf,active:!1});return a.ics}
function gf(a,b,c,d,e,f){var g=ff();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&E.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,lf(a),kf(),R("TAGGING",2))},f)}}}
function hf(a,b){var c=ff();c.active=!0;if(void 0!=b){var d=mf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=mf(a);f.quiet?(f.quiet=!1,lf(a)):g!==d&&lf(a)}}function jf(a,b){ef.push({ue:a,Fg:b})}function lf(a){for(var b=0;b<ef.length;++b){var c=ef[b];Ga(c.ue)&&-1!==c.ue.indexOf(a)&&(c.Ve=!0)}}function kf(){for(var a=0;a<ef.length;++a){var b=ef[a];if(b.Ve){b.Ve=!1;try{b.Fg.call()}catch(c){}}}}
var mf=function(a){var b=ff().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},nf=function(a){return!(ff().entries[a]||{}).quiet},of=function(){return ff().active},pf=function(a,b){ff().addListener(a,b)},qf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!nf(b[e]))return!0;return!1}if(c()){var d=!1;pf(b,function(){d||c()||(d=!0,a())})}else a()},rf=function(a,b){if(!1===mf(b)){var c=!1;pf([b],function(){!c&&mf(b)&&(a(),c=!0)})}};var sf=[I.s,I.I],tf=function(a){var b=a[I.vh];b&&R("GTM",40);var c=a[I.Dh];c&&R("GTM",41);for(var d=Ga(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<sf.length;f++){var g=sf[f],k=a[sf[f]],l=d[e];ff().set(g,k,l,"VN","VN-57",c)}},uf=function(a){for(var b=0;b<sf.length;b++){var c=sf[b],d=a[sf[b]];ff().update(c,d)}ff().notifyListeners()},vf=function(a){var b=mf(a);return void 0!=b?b:!0},wf=function(){for(var a=[],b=0;b<sf.length;b++){var c=mf(sf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},xf=function(a){rf(a,I.s)},yf=function(a,b){qf(a,b)};var Af=function(a){return zf?K.querySelectorAll(a):null},Bf=function(a,b){if(!zf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Cf=!1;if(K.querySelectorAll)try{var Df=K.querySelectorAll(":root");Df&&1==Df.length&&Df[0]==K.documentElement&&(Cf=!0)}catch(a){}var zf=Cf;var Gd={},Rf=null,Sf=Math.random();Gd.w="GTM-TX76XB";Gd.Qb="5k1";Gd.Sd="";var Tf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Uf="www.googletagmanager.com/gtm.js";
var Vf=Uf,Wf=null,Xf=null,Yf=null,Zf="//www.googletagmanager.com/a?id="+Gd.w+"&cv=317",$f={},ag={},bg=function(){var a=Rf.sequence||0;Rf.sequence=a+1;return a};
var cg=function(){return"&tc="+gd.filter(function(a){return a}).length},fg=function(){dg||(dg=E.setTimeout(eg,500))},eg=function(){dg&&(E.clearTimeout(dg),dg=void 0);void 0===gg||hg[gg]&&!ig&&!jg||(kg[gg]||lg.Xg()||0>=mg--?(R("GTM",1),kg[gg]=!0):(lg.xh(),Ue(ng()),hg[gg]=!0,og=pg=jg=ig=""))},ng=function(){var a=gg;if(void 0===a)return"";var b=df("GTM"),c=df("TAGGING");return[qg,hg[a]?"":"&es=1",rg[a],b?"&u="+b:"",c?"&ut="+c:"",cg(),ig,jg,pg,og,"&z=0"].join("")},sg=function(){return[Zf,"&v=3&t=t","&pid="+
Ia(),"&rv="+Gd.Qb].join("")},tg="0.005000">Math.random(),qg=sg(),ug=function(){qg=sg()},hg={},ig="",jg="",og="",pg="",gg=void 0,rg={},kg={},dg=void 0,lg=function(a,b){var c=0,d=0;return{Xg:function(){if(c<a)return!1;Ta()-d>=b&&(c=0);return c>=a},xh:function(){Ta()-d>=b&&(c=0);c++;d=Ta()}}}(2,1E3),mg=1E3,vg=function(a,b){if(tg&&!kg[a]&&gg!==a){eg();gg=a;og=ig="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";rg[a]="&e="+c+"&eid="+a;fg()}},wg=function(a,b,c){if(tg&&!kg[a]&&
b){a!==gg&&(eg(),gg=a);var d,e=String(b[sd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;ig=ig?ig+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(id[g]?"1":"2")+d;og=og?og+"."+k:"&ti="+k;fg();2022<=ng().length&&eg()}},xg=function(a,b,c){if(tg&&!kg[a]){a!==gg&&(eg(),gg=a);var d=c+b;jg=jg?jg+
"."+d:"&epr="+d;fg();2022<=ng().length&&eg()}};var yg={},zg=new Ka,Ag={},Bg={},Eg={name:"dataLayerFB",set:function(a,b){G(bb(a,b),Ag);Cg()},get:function(a){return Dg(a,2)},reset:function(){zg=new Ka;Ag={};Cg()}},Dg=function(a,b){if(2!=b){var c=zg.get(a);if(tg){var d=Fg(a);c!==d&&R("GTM",5)}return c}return Fg(a)},Fg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Gg(b)},Gg=function(a){for(var b=Ag,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Hg=function(a,b){Bg.hasOwnProperty(a)||(zg.set(a,b),G(bb(a,b),Ag),Cg())},Cg=function(a){Ma(Bg,function(b,c){zg.set(b,c);G(bb(b,void 0),Ag);G(bb(b,c),Ag);a&&delete Bg[b]})},Ig=function(a,b,c){yg[a]=yg[a]||{};var d=1!==c?Fg(b):zg.get(b);"array"===mb(d)||"object"===mb(d)?yg[a][b]=G(d):yg[a][b]=d},Jg=function(a,b){if(yg[a])return yg[a][b]},Kg=function(a,b){yg[a]&&delete yg[a][b]};var Ng=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Og=/:[0-9]+$/,Pg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Sg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Qg(a.protocol)||Qg(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||E.location.hostname).replace(Og,"").toLowerCase());return Rg(a,b,c,d,e)},Rg=function(a,b,c,d,e){var f,g=Qg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Tg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Og,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||R("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Pg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Qg=function(a){return a?a.replace(":",
"").toLowerCase():""},Tg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Ug=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||R("TAGGING",1),c="/"+c);var d=b.hostname.replace(Og,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Vg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Ug(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Wg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Xg={},Yg=function(a){return void 0==Xg[a]?!1:Xg[a]};var $g=function(a,b,c,d){return Zg(d)?Wg(a,String(b||document.cookie),c):[]},ch=function(a,b,c,d,e){if(Zg(e)){var f=ah(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=bh(f,function(g){return g.Wb},b);if(1===f.length)return f[0].id;f=bh(f,function(g){return g.Ab},c);return f[0]?f[0].id:void 0}}};function dh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=$g(b,f,!1,d).indexOf(c)}
var hh=function(a,b,c,d){function e(v,x,y){if(null==y)return delete k[x],v;k[x]=y;return v+"; "+x+"="+y}function f(v,x){if(null==x)return delete k[x],v;k[x]=!0;return v+"; "+x}if(!Zg(c.Da))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=eh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.fh);g=e(g,"samesite",
c.Bh);c.Fh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=fh(),r=void 0,t=!1,q=0;q<n.length;++q){var u="none"!==n[q]?n[q]:void 0,w=e(g,"domain",u);try{d&&d(a,k)}catch(v){r=v;continue}t=!0;if(!gh(u,c.path)&&dh(w,a,b,c.Da))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return gh(m,c.path)?1:dh(g,a,b,c.Da)?0:1},ih=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return hh(a,b,c)};
function bh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function ah(a,b,c){for(var d=[],e=$g(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Wb:1*l[0]||1,Ab:1*l[1]||1}))}}return d}
var eh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},jh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,kh=/(^|\.)doubleclick\.net$/i,gh=function(a,b){return kh.test(document.location.hostname)||"/"===b&&jh.test(a)},fh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;kh.test(e)||jh.test(e)||a.push("none");
return a},Zg=function(a){if(!Yg("gtag_cs_api")||!a||!of())return!0;if(!nf(a))return!1;var b=mf(a);return null==b?!0:!!b};var mh=function(){for(var a=Ne.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ta()/1E3)].join(".")},ph=function(a,b,c,d,e){var f=nh(b);return ch(a,f,oh(c),d,e)},qh=function(a,b,c,d){var e=""+nh(c),f=oh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},nh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function rh(a,b,c){var d,e=a.yb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ta())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var sh=["1"],th={},xh=function(a){var b=uh(a.prefix);th[b]||vh(b,a.path,a.domain)||(wh(b,mh(),a),vh(b,a.path,a.domain))};function wh(a,b,c){var d=qh(b,"1",c.domain,c.path),e=rh(c);e.Da="ad_storage";ih(a,d,e)}function vh(a,b,c){var d=ph(a,b,c,sh,"ad_storage");d&&(th[a]=d);return d}function uh(a){return(a||"_gcl")+"_au"};function yh(){for(var a=zh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ah(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var zh,Bh;function Ch(a){zh=zh||Ah();Bh=Bh||yh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(zh[l],zh[m],zh[n],zh[r])}return b.join("")}
function Dh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Bh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}zh=zh||Ah();Bh=Bh||yh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Eh;var Ih=function(){var a=Fh,b=Gh,c=Hh(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ve(K,"mousedown",d);Ve(K,"keyup",d);Ve(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Jh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Hh().decorators.push(f)},Kh=function(a,b,c){for(var d=Hh().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==K.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||n&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Xa(e,g.callback())}}return e},Hh=function(){var a=Pe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Lh=/(.*?)\*(.*?)\*(.*)/,Mh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Nh=/^(?:www\.|m\.|amp\.)+/,Oh=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ph(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Rh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ch(String(d))))}var e=b.join("*");return["1",Qh(e),e].join("*")},Qh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Eh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Eh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Eh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Th=function(){return function(a){var b=Ug(E.location.href),c=b.search.replace("?",""),d=Pg(c,"_gl",!1,!0)||"";a.query=Sh(d)||{};var e=Sg(b,"fragment").match(Ph("_gl"));a.fragment=Sh(e&&e[3]||"")||{}}},Uh=function(a){var b=Th(),c=Hh();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Xa(d,e.query),a&&Xa(d,e.fragment));return d},
Sh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Lh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Qh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Dh(t[q+1]);return r}}}}catch(u){}};
function Vh(a,b,c,d){function e(n){var r=n,t=Ph(a).exec(r),q=r;if(t){var u=t[2],w=t[4];q=t[1];w&&(q=q+u+w)}n=q;var v=n.charAt(n.length-1);n&&"&"!==v&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Oh.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Wh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Kh(b,1,c),e=Kh(b,2,c),f=Kh(b,3,c);if(Ya(d)){var g=Rh(d);c?Xh("_gl",g,a):Yh("_gl",g,a,!1)}if(!c&&Ya(e)){var k=Rh(e);Yh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Yh(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Xh(m,n,r);break a}}"string"==typeof r&&Vh(m,n,r,void 0)}}
function Yh(a,b,c,d){if(c.href){var e=Vh(a,b,c.href,void 0===d?!1:d);Ng.test(e)&&(c.href=e)}}
function Xh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Vh(a,b,c.action);Ng.test(m)&&(c.action=m)}}}
var Fh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Wh(e,e.hostname)}}catch(g){}},Gh=function(a){try{if(a.action){var b=Sg(Ug(a.action),"host");Wh(a,b)}}catch(c){}},Zh=function(a,b,c,d){Ih();Jh(a,b,"fragment"===c?2:1,!!d,!1)},$h=function(a,b){Ih();Jh(a,[Rg(E.location,"host",!0)],b,!0,!0)},ai=function(){var a=K.location.hostname,b=Mh.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Nh,""),l=e.replace(Nh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},bi=function(a,b){return!1===a?!1:a||b||ai()};var ci=/^\w+$/,di=/^[\w-]+$/,ei=/^~?[\w-]+$/,fi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},gi=function(){if(!Yg("gtag_cs_api")||!of())return!0;var a=mf("ad_storage");return null==a?!0:!!a},hi=function(a,b){nf("ad_storage")?gi()?a():rf(a,"ad_storage"):b?R("TAGGING",3):qf(function(){hi(a,!0)},["ad_storage"])},ki=function(a){var b=[];if(!K.cookie)return b;var c=$g(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ii(c[d]);e&&-1===C(b,e)&&b.push(e)}return ji(b)};
function li(a){return a&&"string"==typeof a&&a.match(ci)?a:"_gcl"}
var ni=function(){var a=Ug(E.location.href),b=Sg(a,"query",!1,void 0,"gclid"),c=Sg(a,"query",!1,void 0,"gclsrc"),d=Sg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Pg(e,"gclid",!1,void 0);c=c||Pg(e,"gclsrc",!1,void 0)}return mi(b,c,d)},mi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(di))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Yg("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},pi=function(a){var b=ni();hi(function(){return oi(b,a)})};
function oi(a,b,c){function d(m,n){var r=qi(m,e);r&&(ih(r,n,f),g=!0)}b=b||{};var e=li(b.prefix);c=c||Ta();var f=rh(b,c,!0);f.Da="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.wi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var si=function(a,b){var c=Uh(!0);hi(function(){for(var d=li(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==fi[f]){var g=qi(f,d),k=c[g];if(k){var l=Math.min(ri(k),Ta()),m;b:{for(var n=l,r=$g(g,K.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(ri(r[t])>n){m=!0;break b}m=!1}if(!m){var q=rh(b,l,!0);q.Da="ad_storage";ih(g,k,q)}}}}oi(mi(c.gclid,c.gclsrc),b)})},qi=function(a,b){var c=fi[a];if(void 0!==c)return b+c},ri=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ii(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ti=function(a,b,c,d,e){if(Ga(b)){var f=li(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=qi(a[l],f);if(m){var n=$g(m,K.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};hi(function(){Zh(g,b,c,d)})}},ji=function(a){return a.filter(function(b){return ei.test(b)})},ui=function(a,b){for(var c=li(b.prefix),d={},e=0;e<a.length;e++)fi[a[e]]&&(d[a[e]]=fi[a[e]]);hi(function(){Ma(d,function(f,g){var k=$g(c+g,K.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=ri(l),
n={};n[f]=[ii(l)];oi(n,b,m)}})})};function vi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var wi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(of()){var c=ni();if(vi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);$h(function(){return d},3);$h(function(){var e={};return e._up="1",e},1)}}},xi=function(){var a;if(gi()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({xd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].xd]||(g[b[k].xd]=[]),g[b[k].xd].push({timestamp:l[1],Hg:l[2]}))}a=g}else a={};return a};var yi=/^\d+\.fls\.doubleclick\.net$/;function zi(a,b){nf(I.s)?vf(I.s)?a():xf(a):b?R("GTM",42):yf(function(){zi(a,!0)},[I.s])}function Ai(a){var b=Ug(E.location.href),c=Sg(b,"host",!1);if(c&&c.match(yi)){var d=Sg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Bi(a,b,c){if("aw"==a||"dc"==a){var d=Ai("gcl"+a);if(d)return d.split(".")}var e=li(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!vf(I.s)&&c,g;g=ni()[a]||[];if(0<g.length)return f?["0"]:g}var k=qi(a,e);return k?ki(k):[]}
var Ci=function(a){var b=Ai("gac");if(b)return!vf(I.s)&&a?"0":decodeURIComponent(b);var c=xi(),d=[];Ma(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Hg);g=ji(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Di=function(a,b){var c=ni().dc||[];zi(function(){xh(b);var d=th[uh(b.prefix)],e=!1;if(d&&0<c.length){var f=Rf.joined_au=Rf.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;af(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=uh(b.prefix),n=th[m];n&&wh(m,n,b)}})};var Ei=/[A-Z]+/,Fi=/\s/,Gi=function(a){if(p(a)&&(a=Sa(a),!Fi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ei.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},Ii=function(a){for(var b={},c=0;c<a.length;++c){var d=Gi(a[c]);d&&(b[d.id]=d)}Hi(b);var e=[];Ma(b,function(f,g){e.push(g)});return e};
function Hi(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ji=function(){var a=!1;return a};var Li=function(a,b,c,d){return(2===Ki()||d||"http:"!=E.location.protocol?a:b)+c},Ki=function(){var a=Se(),b;if(1===a)a:{var c=Vf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zi=function(a){return vf(I.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Vg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var $i=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ej=function(a){var b=Dg("gtm.whitelist");b&&R("GTM",9);var c=b&&Za(Ra(b),aj),d=Dg("gtm.blacklist");d||(d=Dg("tagTypeBlacklist"))&&R("GTM",3);d?
R("GTM",8):d=[];dj()&&(d=Ra(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Ra(d),"google")&&R("GTM",2);var e=d&&Za(Ra(d),bj),f={};return function(g){var k=g&&g[sd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=ag[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=0;r<
l.length;r++){if(0>C(c,l[r])){R("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=C(e,k);if(q)t=q;else{var u=La(e,l||[]);u&&R("GTM",10);t=u}}var w=!m||t;w||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(w=La(e,cj));return f[k]=w}},dj=function(){return $i.test(E.location&&E.location.hostname)};var fj={sg:function(a,b){b[sd.Id]&&"string"===typeof a&&(a=1==b[sd.Id]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(sd.Kd)&&null===a&&(a=b[sd.Kd]);b.hasOwnProperty(sd.Md)&&void 0===a&&(a=b[sd.Md]);b.hasOwnProperty(sd.Ld)&&!0===a&&(a=b[sd.Ld]);b.hasOwnProperty(sd.Jd)&&!1===a&&(a=b[sd.Jd]);return a}};var gj={active:!0,isWhitelisted:function(){return!0}},hj=function(a){var b=Rf.zones;!b&&a&&(b=Rf.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)N(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{K.documentElement.doScroll("left"),mj()}catch(a){E.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Tf[b]||"__zone"===b)return-1;var e={};ob(d)&&(e=G(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Gd.w,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Da(b)&&uj(a,b);c&&E.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Wa(function(){return N(function(){b(Gd.w,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Wa(function(){b++;d&&b>=c&&tj(a)})},cg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ea(d)||0>d?0:d}if(!Rf._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=Ea(Eg.get("gtm.start"))?Eg.get("gtm.start"):0;Rf._li={cst:a(c-b),cbt:a(Xf-b)}}};var Bj={},Cj=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||R("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}xj();return E[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return E.GoogleAnalyticsObject||"ga"};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=gd[a],f=Qj(a,b,c,d);if(!f)return null;var g=od(e[sd.ae],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{D:f,C:1===k.Ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[sd.yf])k();else{var v=pd(f,c,[]),x=rj(c.id,String(f[sd.xa]),Number(f[sd.ce]),v[sd.zf]),y=!1;v.vtp_gtmOnSuccess=function(){if(!y){y=!0;var z=Ta()-B;wg(c.id,gd[a],"5");sj(c.id,x,"success",z);g()}};v.vtp_gtmOnFailure=function(){if(!y){y=!0;var z=Ta()-B;wg(c.id,gd[a],"6");sj(c.id,x,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;wg(c.id,f,"1");var A=function(){var z=Ta()-B;wg(c.id,f,"7");sj(c.id,x,"exception",z);y||(y=!0,k())};var B=Ta();try{nd(v,c)}catch(z){A(z)}}}var f=gd[a],g=b.D,k=b.C,l=b.terminate;if(c.dd(f))return null;var m=od(f[sd.de],c,[]);if(m&&m.length){var n=m[0],r=Pj(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.Ae?l:r}if(f[sd.Td]||f[sd.Df]){var t=f[sd.Td]?hd:c.Kh,q=g,u=k;if(!t[a]){e=Wa(e);var w=Rj(a,t,e);g=w.D;k=w.C}return function(){t[a](q,u)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{D:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<gd.length;d++)if(a.zb[d]){var e=gd[d];var f=b.add();try{var g=Pj(d,{D:f,C:f,terminate:f},a,d);g?c.push({bf:d,We:qd(e),Zb:g}):(Vj(d,a),f())}catch(l){f()}}b.cg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].Zb();return 0<c.length};function Wj(a,b){var c,d=b.We,e=a.We;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.bf,k=b.bf;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!tg)return;var c=function(d){var e=b.dd(gd[d])?"3":"4",f=od(gd[d][sd.ae],b,[]);f&&f.length&&c(f[0].index);wg(b.id,gd[d],e);var g=od(gd[d][sd.de],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}vg(a,b);var f=wj(a,d,e);Ig(a,"event",1);Ig(a,"ecommerce",1);Ig(a,"gtm");var g={id:a,name:b,dd:ej(c),zb:[],Kh:[],Ne:function(){R("GTM",6)}};g.zb=Cd(g);var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Gd.w);if(!k)return k;for(var l=0;l<g.zb.length;l++)if(g.zb[l]){var m=gd[l];if(m&&!Tf[String(m[sd.xa])])return!0}return!1};function bk(a,b){}function ck(a,b){return dk()?bk(a,b):void 0}
function dk(){var a=!1;return a};var ek=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){};this.eventId=void 0},fk=function(a){var b=new ek;b.eventModel=a;return b},gk=function(a,b){a.targetConfig=b;return a},hk=function(a,b){a.containerConfig=b;return a},ik=function(a,b){a.a=b;return a},jk=function(a,b){a.globalConfig=b;return a},kk=function(a,b){a.D=b;return a},lk=function(a,b){a.C=b;return a};
ek.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var mk=function(a){function b(e){Ma(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ma(c,function(e){d.push(e)});return d};var nk;if(3===Gd.Qb.length)nk="g";else{var ok="G";nk=ok}
var pk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:nk,OPT:"o"},qk=function(a){var b=Gd.w.split("-"),c=b[0].toUpperCase(),d=pk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Qb.length){var g="w";f="2"+g}else f="";return f+d+Gd.Qb+e};function rk(){var a=!1;a=of();return a}
function sk(a,b,c){function d(r){var t;Rf.reported_gclid||(Rf.reported_gclid={});t=Rf.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],w=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},v="https://www.google.com";if(of()){var x=vf(I.s);w("gcs",wf());r&&w("gcu","1");w("rnd",n);if((!f||g&&"aw.ds"!==g)&&vf(I.s)){var y=ki("_gcl_aw");w("gclaw",y.join("."))}w("url",String(E.location).split(/[?#]/)[0]);w("dclid",tk(b,k));!x&&b&&(v="https://pagead2.googlesyndication.com")}
w("gclid",tk(b,f));w("gclsrc",g);w("gtm",qk(!c));var A=v+"/pagead/landing?"+u.join("&");af(A)}}var e=ni(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=rk();if(l||m){var n=""+mh();m?yf(function(){d();vf(I.s)||xf(function(){return d(!0)})},[I.s]):d()}}
function tk(a,b){var c=a&&!vf(I.s);if(b&&c)return"0";return b}var xl={},yl=["G","GP"];xl.df="";var zl=xl.df.split(",");function Al(){var a=Rf;return a.gcq=a.gcq||new Bl}
var Cl=function(a,b,c){Al().register(a,b,c)},Dl=function(a,b,c,d){Al().push("event",[b,a],c,d)},El=function(a,b){Al().push("config",[a],b)},Fl={},Gl=function(a){return!0},Hl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Il=function(a,b,c,d,e){this.type=a;this.m=b;this.ba=c||"";
this.a=d;this.i=e},Bl=function(){this.m={};this.i={};this.a=[]},Jl=function(a,b){var c=Gi(b);return a.m[c.containerId]=a.m[c.containerId]||new Hl},Kl=function(a,b,c){if(b){var d=Gi(b);if(d&&1===Jl(a,b).status&&Gl(d.prefix)){Jl(a,b).status=2;var e={};tg&&(e.timeoutId=E.setTimeout(function(){R("GTM",38);fg()},3E3));a.push("require",[e],d.containerId);Fl[d.containerId]=Ta();if(Ji()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayerFB&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=ck(c,g)||k;Re(l)}}}},Ll=function(a,b,c,d){if(d.ba){var e=Jl(a,d.ba),
f=e.m;if(f){var g=G(c),k=G(e.targetConfig[d.ba]),l=G(e.containerConfig),m=G(e.i),n=G(a.i),r=Dg("gtm.uniqueEventId"),t=Gi(d.ba).prefix,q=lk(kk(jk(ik(hk(gk(fk(g),k),l),m),n),function(){xg(r,t,"2");}),function(){xg(r,t,"3");});try{xg(r,t,"1");f(d.ba,b,d.m,q)}catch(u){
xg(r,t,"4");}}}};
Bl.prototype.register=function(a,b,c){if(3!==Jl(this,a).status){Jl(this,a).m=b;Jl(this,a).status=3;c&&(Jl(this,a).i=c);var d=Gi(a),e=Fl[d.containerId];if(void 0!==e){var f=Rf[d.containerId].bootstrap,g=d.prefix.toUpperCase();Rf[d.containerId]._spx&&(g=g.toLowerCase());var k=Dg("gtm.uniqueEventId"),l=g,m=Ta()-f;if(tg&&!kg[k]){k!==gg&&(eg(),gg=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);pg=pg?pg+","+n:"&cl="+n}delete Fl[d.containerId]}this.flush()}};
Bl.prototype.push=function(a,b,c,d){var e=Math.floor(Ta()/1E3);Kl(this,c,b[0][I.wa]||this.i[I.wa]);this.a.push(new Il(a,e,c,b,d));d||this.flush()};
Bl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Jl(this,c.ba).status&&!a)return;tg&&E.clearTimeout(c.a[0].timeoutId);break;case "set":Ma(c.a[0],function(l,m){G(bb(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[I.sc];delete d[I.sc];var f=Jl(this,c.ba),g=Gi(c.ba),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.ba]={});f.a&&e||Ll(this,I.J,d,c);f.a=!0;delete d[I.eb];k?G(d,f.containerConfig):
G(d,f.targetConfig[c.ba]);break;case "event":Ll(this,c.a[1],c.a[0],c)}this.a.shift()}};var Ml=function(a,b){return!0};var Nl=function(a,b){var c;return c};var Ol=function(a){};var Pl=function(a){var b;return pb(b,this.m)};var Ql=function(a,b){var c=null;return pb(c,this.m)};var Rl=function(a){var b;return pb(b,this.m)};var Sl=function(a){var b;return b};var Tl=function(a,b){b=void 0===b?!0:b;var c;return c};var Ul=function(a,b){var c;return c};var Vl=function(a,b){var c;return c};var Wl=function(a){var b="";return b};var Xl=function(a){var b="";return b};var Yl=function(a,b){};var Zl={},$l=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Be(this,"inject_script",a);var e=this.m,f=function(){b instanceof db&&b.Ea(e)},g=function(){c instanceof db&&c.Ea(e)};if(!d){Re(a,f,g);return}var k=d;Zl[k]?(Zl[k].onSuccess.push(f),Zl[k].onFailure.push(g)):(Zl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Zl[k].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=Zl[k].onFailure,m=0;m<l.length;m++)N(l[m]);Zl[k]=null},Re(a,f,g));};var am=function(){return!1},bm={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var cm=function(){};var dm=function(a,b){var c=!1;return c};var em=function(a,b,c){};var fm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var gm=function(a,b,c){F(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Be(this,"access_globals","readwrite",a);var d=a.split("."),e=E,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=qb(b,this.m),!0;return!1};var hm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var im=function(a,b,c){var d=this;};var jm={},km={};jm.getItem=function(a){var b=null;return b};
jm.setItem=function(a,b){};
jm.removeItem=function(a){};jm.clear=function(){};var lm=function(a){var b;return b};function mm(a){}
function nm(a,b){var c;return pb(c,this.m)}function om(){var a="";return a}
function pm(){var a="";return a}
var Ec=function(){var a=new Le;Ji()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Yl),a.add("injectScript",$l));var b=em;a.add("Math",te());a.add("TestHelper",Me());a.add("addEventCallback",mm);a.add("aliasInWindow",Ml);a.add("assertApi",pe);a.add("assertThat",qe);a.add("callInWindow",
Nl);a.add("callLater",Ol);a.add("copyFromDataLayer",nm);a.add("copyFromWindow",Pl);a.add("createArgumentsQueue",Ql);a.add("createQueue",Rl);a.add("decodeUri",ue);a.add("decodeUriComponent",ve);a.add("encodeUri",we);a.add("encodeUriComponent",xe);a.add("fail",ye);a.add("fromBase64",Sl,!("atob"in E));a.add("generateRandom",ze);a.add("getContainerVersion",Ce);a.add("getCookieValues",Tl);a.add("getQueryParameters",Ul);a.add("getReferrerQueryParameters",Vl);a.add("getReferrerUrl",Wl);a.add("getTimestamp",
Ae);a.add("getType",De);a.add("getUrl",Xl);a.add("localStorage",bm,!am());a.add("logToConsole",cm);a.add("makeInteger",Fe);a.add("makeNumber",Ge);a.add("makeString",He);a.add("makeTableMap",Ie);a.add("mock",Ke);a.add("queryPermission",dm);a.add("readCharacterSet",om);a.add("readTitle",pm);a.add("sendPixel",b);a.add("setCookie",fm);a.add("setInWindow",gm);a.add("sha256",im);a.add("toBase64",lm,!("btoa"in E));return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Cc,Kd;
function qm(){var a=data.runtime||[],b=data.runtime_lines;Cc=new Bc;rm();cd=function(e,f,g){sm(f);var k=new ib;Ma(f,function(q,u){k.set(q,pb(u))});Cc.a.a.o=yd();var l={dg:Ld(e),eventId:void 0!==g?g.id:void 0,Yb:e,log:function(){}};if(Nj()){var m=Oj(),n=void 0,r=void 0;l.ca={i:{},a:function(q,u,w){1===u&&(n=q);7===u&&(r=w);m(q,u,w)},m:Je()};l.log=function(q,u){if(n){var w=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:w})}}}var t=Dc(l,[e,k]);Cc.a.a.o=void 0;t instanceof pa&&
"return"===t.a&&(t=t.i);return qb(t)};Fc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ud(d,b[c]);Cc.Zb(d)}}function sm(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){N(b)});Da(c)&&(a.gtmOnFailure=function(){N(c)})}
function rm(){var a=Cc;Rf.SANDBOXED_JS_SEMAPHORE=Rf.SANDBOXED_JS_SEMAPHORE||0;Gc(a,function(b,c,d){Rf.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Rf.SANDBOXED_JS_SEMAPHORE--}})}function tm(a){void 0!==a&&Ma(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");ag[e]=ag[e]||[];ag[e].push(b)}})};var um=["HA","GF","GP","G"],vm="G".split(/,/);vm.push("DC");vm.push("UA");vm.push("AW");var wm=!1;
wm=!0;var xm=null,ym={},zm={},Am;function Bm(a,b){var c={event:a};b&&(c.eventModel=G(b),b[I.Gc]&&(c.eventCallback=b[I.Gc]),b[I.Lb]&&(c.eventTimeout=b[I.Lb]));return c}
var Gm={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!ob(a[2])&&void 0!=a[2])return;c=a[2]}var d=Bm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;
2==a.length&&ob(a[1])?b=G(a[1]):3==a.length&&p(a[1])&&(b={},ob(a[2])||Ga(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var Hm={policy:!0};var Im=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Km=function(a){var b=Jm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Lm=!1,Mm=[];function Nm(){if(!Lm){Lm=!0;for(var a=0;a<Mm.length;a++)N(Mm[a])}}var Om=function(a){Lm?N(a):Mm.push(a)};var en=function(a){if(dn(a))return a;this.a=a};en.prototype.Ng=function(){return this.a};var dn=function(a){return!a||"object"!==mb(a)||ob(a)?!1:"getUntrustedUpdateValue"in a};en.prototype.getUntrustedUpdateValue=en.prototype.Ng;var fn=[],gn=!1,hn=function(a){return E["dataLayerFB"].push(a)},jn=function(a){var b=Rf["dataLayerFB"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function kn(a){var b=a._clear;Ma(a,function(f,g){"_clear"!==f&&(b&&Hg(f,void 0),Hg(f,g))});Wf||(Wf=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=bg(),a["gtm.uniqueEventId"]=d,Hg("gtm.uniqueEventId",d));Yf=c;var e=ln(a);Yf=null;switch(c){case "gtm.init":R("GTM",19),e&&R("GTM",20)}return e}
function ln(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Rf.zones;d=e?e.checkState(Gd.w,c):gj;return d.active?Zj(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function mn(){for(var a=!1;!gn&&0<fn.length;){gn=!0;delete Ag.eventModel;Cg();var b=fn.shift();if(null!=b){var c=dn(b);if(c){var d=b;b=dn(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Dg(g,1);if(Ga(k)||ob(k))k=G(k);Bg[g]=k}}try{if(Da(b))try{b.call(Eg)}catch(u){}else if(Ga(b)){var l=b;if(p(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=Dg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Na(b)){a:{if(b.length&&p(b[0])){var q=Gm[b[0]];if(q&&(!c||!Hm[b[0]])){b=q(b);break a}}b=void 0}if(!b){gn=!1;continue}}a=kn(b)||a}}finally{c&&Cg(!0)}}gn=!1}return!a}function nn(){var a=mn();try{Im(E["dataLayerFB"],Gd.w)}catch(b){}return a}
var pn=function(){var a=Pe("dataLayerFB",[]),b=Pe("google_tag_manager",{});b=b["dataLayerFB"]=b["dataLayerFB"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Om(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Rf.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new en(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);fn.push.apply(fn,d);if(300<
this.length)for(R("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return mn()&&g};fn.push.apply(fn,a.slice(0));on()&&N(nn)},on=function(){var a=!0;return a};var qn={};qn.Mb=new String("undefined");
var rn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===qn.Mb?b:a[d]);return c.join("")}};rn.prototype.toString=function(){return this.a("undefined")};rn.prototype.valueOf=rn.prototype.toString;qn.Mf=rn;qn.Pc={};qn.wg=function(a){return new rn(a)};var sn={};qn.yh=function(a,b){var c=bg();sn[c]=[a,b];return c};qn.we=function(a){var b=a?0:1;return function(c){var d=sn[c];if(d&&"function"===typeof d[b])d[b]();sn[c]=void 0}};qn.Vg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};qn.ph=function(a){if(a===qn.Mb)return a;var b=bg();qn.Pc[b]=a;return'google_tag_manager["'+Gd.w+'"].macro('+b+")"};qn.gh=function(a,b,c){a instanceof qn.Mf&&(a=a.a(qn.yh(b,c)),b=Ca);return{bd:a,D:b}};var tn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Xe(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},un=function(a){Rf.hasOwnProperty("autoEventsSettings")||(Rf.autoEventsSettings={});var b=Rf.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},vn=function(a,b,c){un(a)[b]=c},wn=function(a,b,c,d){var e=un(a),f=Ua(e,b,d);e[b]=c(f)},xn=function(a,b,c){var d=un(a);return Ua(d,b,c)};var yn=["input","select","textarea"],zn=["button","hidden","image","reset","submit"],An=function(a){var b=a.tagName.toLowerCase();return!Ha(yn,function(c){return c===b})||"input"===b&&Ha(zn,function(c){return c===a.type.toLowerCase()})?!1:!0},Bn=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):$e(a,["form"],100)},Cn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(An(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Dn=!!E.MutationObserver,En=void 0,Fn=function(a){if(!En){var b=function(){var c=K.body;if(c)if(Dn)(new MutationObserver(function(){for(var e=0;e<En.length;e++)N(En[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ve(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<En.length;e++)N(En[e])}))})}};En=[];K.body?b():N(b)}En.push(a)};var $n=E.clearTimeout,ao=E.setTimeout,S=function(a,b,c){if(Ji()){b&&N(b)}else return Re(a,b,c)},bo=function(){return E.location.href},co=function(a){return Sg(Ug(a),"fragment")},eo=function(a){return Tg(Ug(a))},T=function(a,b){return Dg(a,b||2)},fo=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=hn(a)):d=hn(a);return d},go=function(a,b){E[a]=b},U=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},ho=function(a,b,c){return $g(a,b,void 0===c?!0:!!c)},io=function(a,b){if(Ji()){b&&N(b)}else Te(a,b)},jo=function(a){return!!xn(a,"init",!1)},ko=function(a){vn(a,"init",!0)},lo=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Vf;c+="?id="+encodeURIComponent(a)+"&l=dataLayerFB";S(Li("https://","http://",c))},mo=function(a,b){var c=a[b];return c};
var no=qn.gh;function Ko(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Lo=new Ka;function Mo(a,b){function c(g){var k=Ug(g),l=Sg(k,"protocol"),m=Sg(k,"host",!0),n=Sg(k,"port"),r=Sg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function No(a){return Oo(a)?1:0}
function Oo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(No({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return Ko(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=C(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,r=Lo.get(n);r||(r=new RegExp(c,m),Lo.set(n,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Mo(b,c)}return!1};var Po=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Qo={},Ro=encodeURI,Y=encodeURIComponent,So=Ue;var To=function(a,b){if(!a)return!1;var c=Sg(Ug(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Uo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Qo.Wg=function(){var a=!1;return a};function lq(){return E.gaGlobal=E.gaGlobal||{}}var mq=function(){var a=lq();a.hid=a.hid||Ia();return a.hid};var vq=window,wq=document,xq=function(a){var b=vq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===vq["ga-disable-"+a])return!0;try{var c=vq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Wg("AMP_TOKEN",String(wq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return wq.getElementById("__gaOptOutExtension")?!0:!1};function Aq(a,b){delete b.eventModel[I.eb];if(a!==I.J){var c=b.getWithConfig(I.kc);if(Ga(c)){R("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],g=b.getWithConfig(f);void 0!==g&&(d[f]=g)}b.eventModel=d}}Cq(b.eventModel)}var Cq=function(a){Ma(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.la]||{};Ma(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Fq=function(a,b,c){Dl(b,c,a)},Gq=function(a,b,c){Dl(b,c,a,!0)},Iq=function(a,b){};
function Hq(a,b){}var Z={b:{}};

Z.b.veip=["nonGooglePixels"],function(){var a=!1,b=function(c){if(a)c.vtp_gtmOnSuccess();else if(To(c.vtp_pixelUrl,["veinteractive.com","ve-interactive.cn"]))try{So(c.vtp_pixelUrl,c.vtp_gtmOnSuccess,c.vtp_gtmOnFailure),a=!0}catch(d){N(c.vtp_gtmOnFailure)}else N(c.vtp_gtmOnFailure)};Z.__veip=b;Z.__veip.g="veip";Z.__veip.h=!0;Z.__veip.priorityOverride=0}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=U("google_trackConversion");if(Da(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=Uo(a.vtp_customParams,
"key","value"));var k={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(k.value=a.vtp_eventValue),a.vtp_eventItems&&(k.items=a.vtp_eventItems));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_gtag_event_data:k,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:qk()};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);
f(l)||c()}else c()},e=function(){S(b,d,c)};if(of()){yf(function(){vf(I.s)?e():xf(e)},[I.s]);return}xj();e()})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(Jg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=T("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Sg(Ug(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):eo(String(b)):String(b)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return ho(a.vtp_name,T("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,t))return}else if("write"===r){if(-1<C(f,t))return}else if("readwrite"===r){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===r){if(-1<C(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ia(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=T("gtm.url",1);c=c||bo();var d=b[a("vtp_component")];if(!d||"URL"==d)return eo(String(c));var e=Ug(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Sg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Sg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=T(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.ua=["google"],function(){var a,b={},c=function(e){yf(function(){d(e)},[I.I,I.s])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;G(Uo(n.vtp_fieldsToSet,"fieldName","value"),g);G(Uo(n.vtp_contentGroup,"index","group"),k);G(Uo(n.vtp_dimension,"index","dimension"),l);G(Uo(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=G(n);e=G(e,r)}G(Uo(e.vtp_fieldsToSet,
"fieldName","value"),g);G(Uo(e.vtp_contentGroup,"index","group"),k);G(Uo(e.vtp_dimension,"index","dimension"),l);G(Uo(e.vtp_metric,"index","metric"),m);vf(I.I)||(g.storage="none"),vf(I.s)||(g.allowAdFeatures=!1,g.storeGac=!1);var t=Ej(e.vtp_functionName);if(Da(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+bg(),
q=u+".");var w={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,
allowAdFeatures:!0,allowAdPersonalizationSignals:!0},x=function(P){var Q=[].slice.call(arguments,0);Q[0]=q+Q[0];t.apply(window,Q)},y=function(P,Q){return void 0===Q?Q:P(Q)},A=function(P,Q){if(Q)for(var Ja in Q)Q.hasOwnProperty(Ja)&&x("set",P+Ja,Q[Ja])},B=function(){var P=function(Mq,Lk,Nq){if(!ob(Lk))return!1;for(var Md=Ua(Object(Lk),Nq,[]),lh=0;Md&&lh<Md.length;lh++)x(Mq,Md[lh]);return!!Md&&0<Md.length},Q;if(e.vtp_useEcommerceDataLayer){var Ja=
!1;Ja||(Q=T("ecommerce",1))}else e.vtp_ecommerceMacroData&&(Q=e.vtp_ecommerceMacroData.ecommerce);if(!ob(Q))return;Q=Object(Q);var $a=Ua(g,"currencyCode",Q.currencyCode);void 0!==$a&&x("set","&cu",$a);P("ec:addImpression",Q,"impressions");if(P("ec:addPromo",Q[Q.promoClick?"promoClick":"promoView"],"promotions")&&Q.promoClick){x("ec:setAction",
"promo_click",Q.promoClick.actionField);return}for(var Fa="detail checkout checkout_option click add remove purchase refund".split(" "),Va="refund purchase remove checkout checkout_option add click detail".split(" "),eb=0;eb<Fa.length;eb++){var Ab=Q[Fa[eb]];if(Ab){P("ec:addProduct",Ab,"products");x("ec:setAction",Fa[eb],Ab.actionField);if(tg)for(var Sb=0;Sb<Va.length;Sb++){var Vc=Q[Va[Sb]];if(Vc){Vc!==Ab&&R("GTM",13);break}}break}}},
z=function(P,Q,Ja){var $a=0;if(P)for(var Fa in P)if(P.hasOwnProperty(Fa)&&(Ja&&w[Fa]||!Ja&&void 0===w[Fa])){var Va=v[Fa]?Qa(P[Fa]):P[Fa];"anonymizeIp"!=Fa||Va||(Va=void 0);Q[Fa]=Va;$a++}return $a},D={name:u};z(g,D,!0);t("create",e.vtp_trackingId||f.trackingId,D);x("set","&gtm",qk(!0));of()&&x("set","&gcs",wf());e.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(P,Q){void 0!==e[Q]&&x("set",P,e[Q])})("nonInteraction","vtp_nonInteraction");A("contentGroup",k);A("dimension",l);A("metric",m);var H={};z(g,H,!1)&&x("set",H);var M;
e.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var P=g&&g.hitCallback;Da(P)&&P();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());var O={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:y(String,e.vtp_eventLabel||f.label),eventValue:y(Pa,e.vtp_eventValue||
f.value)};z(M,O,!1);x("send",O);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==
e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var W=
"_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:W})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var xa="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:xa})}M?x("send","pageview",M):x("send","pageview");e.vtp_autoLinkDomains&&Fj(q,e.vtp_autoLinkDomains,!!e.vtp_useHashAutoLink,!!e.vtp_decorateFormsAutoLink);
}if(!a){var Ba=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var Oa=ck(g._x_19,"/analytics.js"),sa=Li("https:","http:","//www.google-analytics.com/"+Ba,g&&g.forceSSL);S("analytics.js"===Ba&&Oa?Oa:sa,function(){var P=Cj();P&&P.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else N(e.vtp_gtmOnFailure)};
Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ie(Ug(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();




Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){N(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var k={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||ai())&&si(a,k));pi(k);ui(["aw","dc"],k);Di(g,k);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),n=b.vtp_urlPosition,r=!!b.vtp_formDecoration;ti(a,m,n,r,l);}var t=T(I.N);
sk(!1,void 0!=t&&!1!==t);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&wi()})}();

Z.b.aev=["google"],function(){function a(q,u){var w=Jg(q,"gtm");if(w)return w[u]}function b(q,u,w,v){v||(v="element");var x=q+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var A=a(q,v);if(A&&(y=w(A),n[x]=y,r.push(x),35<r.length)){var B=r.shift();delete n[B]}}return y}function c(q,u,w){var v=a(q,t[u]);return void 0!==v?v:w}function d(q,u){if(!q)return!1;var w=e(bo());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var v=[w],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(q))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;v.push(e(y))}}return!To(q,v)}function e(q){m.test(q)||(q="http://"+q);return Sg(Ug(q),"HOST",!0)}function f(q,u,w){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||w;case "LENGTH":var v=b(u,"FORM."+q,k);return void 0===v?w:v;case "INTERACTED_FIELD_ID":return l(u,"id",w);case "INTERACTED_FIELD_NAME":return l(u,"name",w);case "INTERACTED_FIELD_TYPE":return l(u,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?w:y;default:return w}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Xe(q,"value");case "button":return Ye(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,w=0;w<q.elements.length;w++)An(q.elements[w])&&u++;return u}}function l(q,u,w){var v=a(q,"interactedFormField");return v&&Xe(v,u)||w}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,w=q.vtp_defaultValue,v=q.vtp_varType;switch(v){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
w;case "TEXT":return b(u,v,Ye)||w;case "URL":var y;a:{var A=String(a(u,"elementUrl")||w||""),B=Ug(A),z=String(q.vtp_component||"URL");switch(z){case "URL":y=A;break a;case "IS_OUTBOUND":y=d(A,q.vtp_affiliatedDomains);break a;default:y=Sg(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,v,w);else{var H=q.vtp_attribute,M=a(u,"element");D=M&&Xe(M,H)||w||""}return D;case "MD":var O=q.vtp_mdValue,da=b(u,"MD",Mn);return O&&da?Pn(da,
O)||w:da||w;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,w);default:return c(u,v,w)}})}();
Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=G(b),d=c;d[sd.xa]=null;d[sd.sf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();

Z.b.ga=["google"],function(){var a,b,c=function(d){function e(L){var J=[].slice.call(arguments,0);J[0]=w+J[0];q.push(J)}function f(L,J){void 0!==d[J]&&e(L,d[J])}function g(L,J){void 0!==d[J]&&e(L,Number(d[J]))}function k(L,J){if(t(J))for(var X=0;X<J.length;X++)e(L,J[X])}function l(L,J,X){if(t(J))for(var ba=0;ba<J.length;ba++){for(var W=[L],xa=J[ba],Ba=0;Ba<X.length;Ba++)W.push(xa[X[Ba]]);e.apply(this,W)}}function m(L,J){void 0!==d[J]&&e("_set",L,d[J])}function n(L,J){return void 0===J?J:L(J)}function r(L,
J){void 0!==J&&(v+="&"+L+"="+J)}var t=Ga,q=U("_gaq",[],!1),u=!1,w="";void 0==d.vtp_trackerName?w="gtm"+bg()+".":""!==d.vtp_trackerName&&(w=d.vtp_trackerName+".");f("_setAccount","vtp_webPropertyId");e("_set","gtmid",qk(!0));f("_setDomainName","vtp_domainName");
f("_setAllowLinker","vtp_allowLinker");f("_setAllowAnchor","vtp_allowAnchor");
f("_setAllowHash","vtp_allowHash");k("_addIgnoredRef",d.vtp_ignoredRef);
k("_addIgnoredOrganic",d.vtp_ignoredOrganic);
var v="";

if(""!==v){var x=function(L,J,X){for(var ba=J.length-1;0<=ba;ba--){var W=J[ba].split("=");if(W[0]===L)return W[1]||"1"}for(var xa=X.length-1;0<=xa;xa--){var Ba=X[xa].split("=");if(Ba[0]===L)return Ba[1]||"1"}},y=Ug(bo()),A=Sg(y,"query").split("&"),B=d.vtp_allowAnchor?Sg(y,"fragment").split("&"):[];r("gclid",x("gclid",B,A));r("gclsrc",x("gclsrc",B,A));r("dclid",x("dclid",B,A));e("_set","campaignParams",v)}m("anonymizeIp","vtp_anonymizeIp");
d.vtp_enableInPageLinkId&&e("_require","inpage_linkid","//www.google-analytics.com/plugins/ga/inpage_linkid.js");f("_setCampaignTrack",
"vtp_campaignTrack");f("_setClientInfo","vtp_clientInfo");f("_setDetectFlash","vtp_detectFlash");f("_setDetectTitle","vtp_detectTitle");

void 0!==d.vtp_forceSsl&&d.vtp_forceSsl&&(q.push(["_gat._forceSSL"]),u=!!d.vtp_forceSsl);e("_set","hitCallback",function(){Da(d.vtp_hitCallback)&&d.vtp_hitCallback();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("LINK"==d.vtp_trackType){}else if("LINK_BY_POST"==d.vtp_trackType){}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else e("_trackPageview");k("_cookiePathCopy",d.vtp_cookiePathCopy);
var Aa=function(){U("_gat")||d.vtp_gtmOnFailure()};if(d.vtp_doubleClick)b||(b=!0,S(Li("https","http","://stats.g.doubleclick.net/dc.js",u),Aa,d.vtp_gtmOnFailure));else if(!a){var V=d.vtp_useDebugVersion?".google-analytics.com/u/ga_debug.js":".google-analytics.com/ga.js";a=!0;S(Li("https://ssl","http://www",V,u),Aa,d.vtp_gtmOnFailure)}};Z.__ga=c;Z.__ga.g="ga";Z.__ga.h=!0;Z.__ga.priorityOverride=0}();

Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=U("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){function l(){var v=!1;v=!0;v&&of()?
yf(function(){var x=vf(I.s),y=!x&&void 0!=T(I.N)&&!1!==T(I.N);!k.vtp_transportUrl&&y&&(m.google_transport_url="https://pagead2.googlesyndication.com/");t("gcs",wf());b.push(m);x||xf(function(){m=G(m);!k.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;t("gcs",wf());t("gcu","1");b.push(m)})},[I.s]):b.push(m)}xj();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,google_conversion_value:k.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:qk()};k.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=T(I.N)&&!1!==T(I.N)&&(m.google_gtm_url_processor=function(v){return v=Zi(v)});var n=function(v){return function(x,y,A){var B="DATA_LAYER"==v?T(A):k[y];B&&(m[x]=B)}},r=n("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(r=n(k.vtp_productReportingDataSource),
r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));
var t=function(v,x){(m.google_additional_conversion_params=m.google_additional_conversion_params||{})[v]=x},q=function(v){return function(x,y,A,B){var z="DATA_LAYER"==v?T(A):k[y];B(z)&&t(x,z)}};var u=ck(k.vtp_transportUrl,"/pagead/conversion_async.js");u||(u=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":
"https://www.google.com/pagead/conversion_async.js");k.vtp_enableNewCustomerReporting&&(r=q(k.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),r("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=
!1):m.google_read_gcl_cookie_opt_out=!0;var w=!0;w&&l();a||(a=!0,S(u,f(),e(u)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Uo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Qe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){oj(function(){var g,k=Rf;k.postscribe||(k.postscribe=ke);g=k.postscribe;var l={done:e},m=K.createElement("div");m.style.display="none";m.style.visibility="hidden";K.body.appendChild(m);try{g(m,d,l)}catch(n){N(f)}})};var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=no(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.bd,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(K.body,Ze(g),k,e)()}else ao(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Ze('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}So(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var Jq={};Jq.macro=function(a){if(qn.Pc.hasOwnProperty(a))return qn.Pc[a]},Jq.onHtmlSuccess=qn.we(!0),Jq.onHtmlFailure=qn.we(!1);Jq.dataLayer=Eg;Jq.callback=function(a){$f.hasOwnProperty(a)&&Da($f[a])&&$f[a]();delete $f[a]};function Kq(){Rf[Gd.w]=Jq;Xa(ag,Z.b);kd=kd||qn;ld=fj}
function Lq(){Xg.gtm_3pds=!0;Rf=E.google_tag_manager=E.google_tag_manager||{};if(Rf[Gd.w]){var a=Rf.zones;a&&a.unregisterChild(Gd.w);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)dd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)gd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)fd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);ed.push(r)}id=Z;jd=No;var q=data.permissions||{},u=data.sandboxed_scripts,w=data.security_groups;qm();Kd=new Jd(q);if(void 0!==
u)for(var v=["sandboxedScripts"],x=0;x<u.length;x++){var y=u[x].replace(/^_*/,"");ag[y]=v}tm(w);Kq();pn();jj=!1;kj=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)mj();else{Ve(K,"DOMContentLoaded",mj);Ve(K,"readystatechange",mj);if(K.createEventObject&&K.documentElement.doScroll){var A=!0;try{A=!E.frameElement}catch(H){}A&&nj()}Ve(E,"load",mj)}Lm=!1;"complete"===K.readyState?Nm():Ve(E,"load",Nm);a:{if(!tg)break a;E.setInterval(ug,864E5);}
Xf=(new Date).getTime();}}
(function(a){a()})(Lq);

})()
