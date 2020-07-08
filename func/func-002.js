const mixin = function(){ 
    return this * this; 
};

mixin.apply(5); 
// или mixin.call(5);
// или mixin.bind(5)();
