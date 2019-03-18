    function isPhone (val) {
    //  takes a single parameter 
    // returns true if the argument represents a function 
    // false if is not
        const first_format = /^([0-9]{10})$/;
        const second_format = /^([0-9]{3})\s([0-9]{3})\s([0-9]{4})$/;
        const third_format = /^\(([0-9]{3})\)\s([0-9]{3})\-([0-9]{4})$/;
        const fourth_format = /^([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/;
        const fifth_format = /^\(([0-9]{3})\)([0-9]{3})\-([0-9]{4})$/;
        //console.log(/[0-9][0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]/.test('978 909 9209'))

        if (first_format.test(val)) {
            console.log('egg')
            return true
        } else if (second_format.test(val)) {
            console.log('egg2')
            return true
        } else if (third_format.test(val)) {
            console.log('egg3')
            return true
        } else if (fourth_format.test(val)) {
            console.log('egg4')
            return true
        } else if (fifth_format.test(val)) {
            console.log('egg5')
            return true
        } else {
            return false
        }
    }

    function containsPhone (value) {
        const check_value = value.split(' ').filter(isPhone) 
        if (check_value.length !== 0 ) {
            return true
        } else {
            return false
        }
            
        
        // console.log( value.includes(isPhone))
        // return 
    }
    console.log(containsPhone('hello this is my phone number 9783440555'))
    console.log(containsPhone('hello this is my phone number '))
    console.log(containsPhone('this number is (993)022-4000'))
    console.log(containsPhone('this number is (993) 022-4000'))


    function extractPhone (value) {
        console.log('asdf')
        return value.split(' ').filter(isPhone)
        //var found = value.indexOf(isPhone)
        //console.log(found)
        
    }
    console.log(extractPhone(' kksad flds 9783945009 2034055555'))
    //console.log(extractPhone('9783378989'))

    function extractColorNumber () {
    // takes a single parametoker and return the first valid CSS color 
    // Specifier it finds in that value as a string converted
    // and normalized to #HHHHH format 
    // should identify and extract CSS color specifiers in the following
    // formats
    //#HHHHHH
    //HHH
    // rgb...


    }