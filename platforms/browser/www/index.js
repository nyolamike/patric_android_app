$(function () {
    // alert("Hello there");
    var app = new Vue({
        el: '#app_wrapper',
        data(){
            return {
                common_medical_services: common_medical_services,
                query: "",
                menu_links: menu_links,
                page_data: page_data
            }
        },
        methods: {
            search: function(){
                var query = this.query.trim();
                if(query.length > 0){
                    localStorage.setItem("q",query);
                    var path = "/search_results.html";
                    window.location = path;
                    // alert(path);
                    // window.location.assign(path);
                }
            },
            gotohospital(hospital){
                window.location = hospital.url;
            }
        }
    })
});