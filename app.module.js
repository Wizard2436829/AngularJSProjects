var app = angular.module("myApp", []);

app.directive('myTextError', function() {

    var directive = {};
    var finalValidationStatus = null; // Used when the final submit button has been clicked.

    function Validate_ForNull(FieldValue) {

        console.log(FieldValue);

        var return_null_status = null;

        if (FieldValue === null || FieldValue === "" || FieldValue === " ") {
            return_null_status = false;
        } else {
            return_null_status = true;
        }

        return return_null_status;

    }

    directive.restrict = 'EA',

        directive.scope = {},

        directive.controller = function($element) {

            $element.on('keyup', validateText);
            $element.on('click', validateText);


            function validateText() {

                var tempResult = $element[0].value; // This is how you look for all the input elements.


                if (Validate_ForNull(tempResult)) {

                } else {

                    finalValidationStatus = false;

                    $element[0].classList.add("uneditable-input");

                }

                var regexPattern = null;

                regexPattern = /(^[A-Za-z]{1,}(([A-Za-z]*)\s([A-Za-z]*)){1,3}[A-Za-z]$)|(^[A-Za-z]{1,}[A-Za-z]$)/g;
                finalValidationStatus = regexPattern.test(tempResult) ? true : false;

                if (finalValidationStatus === true) {
                    $element[0].classList.remove("uneditable-input");

                } else {

                    $element[0].classList.add("uneditable-input");
                }

            }

        }

    return directive;

});


app.directive('myNumberError', function() {

    function Validate_ForNull(FieldValue) {

        console.log(FieldValue);

        var return_null_status = null;

        if (FieldValue === null || FieldValue === "" || FieldValue === " ") {
            return_null_status = false;
        } else {
            return_null_status = true;
        }

        return return_null_status;

    }

    var directive = {};

    directive.restrict = 'EA',

        directive.controller = function($element, $scope) {

            $element.on('keyup', validateNumbers);
            $element.on('click', validateNumbers);


            function validateNumbers() {

                var tempResult = $element[0].value;

                if (Validate_ForNull(tempResult)) {
                    console.log("field populated");
                } else {
                    console.log(" field not populated");
                    $element[0].classList.add("uneditable-input");
                }

                var regexPattern = null;
                var validation_result = null;

                regexPattern = /^\d+$/;
                validation_result = regexPattern.test(tempResult) ? true : false;

                if (validation_result === true) {
                    $element[0].classList.remove("uneditable-input");
                } else {
                    $element[0].classList.add("uneditable-input");
                }

            }

        }

    return directive;

});


app.directive('myEmailError', function() {


    function Validate_ForNull(FieldValue) {

        console.log(FieldValue);

        var return_null_status = null;

        if (FieldValue === null || FieldValue === "" || FieldValue === " ") {
            return_null_status = false;
        } else {
            return_null_status = true;
        }

        return return_null_status;

    }

    var directive = {};

    directive.restrict = 'EA',

        directive.controller = function($element) {

            $element.on('keyup', validateEmail);
            $element.on('click', validateEmail);


            function validateEmail() {

                var tempResult = $element[0].value;

                if (Validate_ForNull(tempResult)) {
                    console.log("field populated");
                } else {
                    console.log(" field not populated");
                    $element[0].classList.add("uneditable-input");
                }

                var regexPattern = null;
                var validation_result = null;

                regexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
                validation_result = regexPattern.test(tempResult) ? true : false;

                if (validation_result === true) {
                    $element[0].classList.remove("uneditable-input");
                } else {
                    $element[0].classList.add("uneditable-input");
                }

            }

        }

    return directive;

});


app.controller("myAppController", ['$scope', function($scope) {

    $scope.NameArray = ['Akshay', 'Sharukh', 'Salman', 'TaherShah'];

    $scope.clickThisShit = function(myForm) {

        if (myForm.$invalid) {
            console.log("Not sure about this");
        } else {
            console.log("sure about this");
        }

    }

}]);