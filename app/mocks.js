System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CARPARTS;
    return {
        setters:[],
        execute: function() {
            exports_1("CARPARTS", CARPARTS = [
                {
                    id: 1,
                    name: 'Super Tires',
                    description: 'These tires are the very best',
                    inStock: 5,
                    price: 4.49,
                    image: '/images/tire.jpg',
                    featured: false,
                    quantity: 0
                },
                {
                    id: 2,
                    name: 'Reinforced Shocks',
                    description: 'Shocks made from kryptonite',
                    inStock: 4,
                    price: 9.99,
                    image: '/images/shocks.jpg',
                    featured: true,
                    quantity: 0
                },
                {
                    id: 3,
                    name: 'Padded Seats',
                    description: 'Super soft seats for smooth ride',
                    inStock: 0,
                    price: 24.99,
                    image: '/images/seats.jpg',
                    featured: false,
                    quantity: 0
                }
            ]);
        }
    }
});
//# sourceMappingURL=mocks.js.map