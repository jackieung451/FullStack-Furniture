<<<<<<< HEAD
/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/sk",[],function(){var e={2:function(e){return e?"dva":"dve"},3:function(){return"tri"},4:function(){return"štyri"}};return{errorLoading:function(){return"Výsledky sa nepodarilo načítať."},inputTooLong:function(n){var t=n.input.length-n.maximum;return 1==t?"Prosím, zadajte o jeden znak menej":t>=2&&t<=4?"Prosím, zadajte o "+e[t](!0)+" znaky menej":"Prosím, zadajte o "+t+" znakov menej"},inputTooShort:function(n){var t=n.minimum-n.input.length;return 1==t?"Prosím, zadajte ešte jeden znak":t<=4?"Prosím, zadajte ešte ďalšie "+e[t](!0)+" znaky":"Prosím, zadajte ešte ďalších "+t+" znakov"},loadingMore:function(){return"Načítanie ďalších výsledkov…"},maximumSelected:function(n){return 1==n.maximum?"Môžete zvoliť len jednu položku":n.maximum>=2&&n.maximum<=4?"Môžete zvoliť najviac "+e[n.maximum](!1)+" položky":"Môžete zvoliť najviac "+n.maximum+" položiek"},noResults:function(){return"Nenašli sa žiadne položky"},searching:function(){return"Vyhľadávanie…"},removeAllItems:function(){return"Odstráňte všetky položky"}}}),e.define,e.require}();
=======
/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/sk",[],function(){var e={2:function(e){return e?"dva":"dve"},3:function(){return"tri"},4:function(){return"štyri"}};return{errorLoading:function(){return"Výsledky sa nepodarilo načítať."},inputTooLong:function(t){var n=t.input.length-t.maximum;return n==1?"Prosím, zadajte o jeden znak menej":n>=2&&n<=4?"Prosím, zadajte o "+e[n](!0)+" znaky menej":"Prosím, zadajte o "+n+" znakov menej"},inputTooShort:function(t){var n=t.minimum-t.input.length;return n==1?"Prosím, zadajte ešte jeden znak":n<=4?"Prosím, zadajte ešte ďalšie "+e[n](!0)+" znaky":"Prosím, zadajte ešte ďalších "+n+" znakov"},loadingMore:function(){return"Načítanie ďalších výsledkov…"},maximumSelected:function(t){return t.maximum==1?"Môžete zvoliť len jednu položku":t.maximum>=2&&t.maximum<=4?"Môžete zvoliť najviac "+e[t.maximum](!1)+" položky":"Môžete zvoliť najviac "+t.maximum+" položiek"},noResults:function(){return"Nenašli sa žiadne položky"},searching:function(){return"Vyhľadávanie…"},removeAllItems:function(){return"Odstráňte všetky položky"}}}),{define:e.define,require:e.require}})();
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
