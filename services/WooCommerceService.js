const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerceApi = new WooCommerceRestApi({
    url: 'https://kosmetika.sandev.online',
    consumerKey: 'ck_bbc22756603df50d76c39b91e851c1c2385298b3',
    consumerSecret: 'cs_ce7e0c40b0c4aeccb872bebdc0a58a823d6d3598',
    version: "wc/v3"
});

export default WooCommerceApi