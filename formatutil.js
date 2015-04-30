/*
	Class Formatutil for formatting strings and numbers 
*/

var Formatutil = (function() {

	/*
		private formatNumber method - formats a number from 1234 to 1,234
		@param val - a number
		@return string - formatted number
	*/
  var formatNumber = function ( val ) {

    var rev = val.toString();
    var len = rev.length;

    // convert string to an array and reverse its order
    rev = rev.split("").reverse();
    var res = [];

    // iterate throuw the array and add commas in the right places
    cnt = 0;
    res = rev.map ( function( obj ) {
        cnt++;
        if ( cnt % 3 == 0 && cnt != len ) {

            obj = "," + obj;

        }
        return obj;
    } );

    result = res.reverse().join("");

    return result;
  }

  return {

  	/*
		public method format
		@param val - the value to be formatted
		@param f - type of format, ie: number, TODO: title case and whatever else is needed...
		@return formatted string
  	*/
    format : function ( val, f) {

        var result = "";

        switch ( f ) {

          case "number":
            result = formatNumber ( val ) ;
          break;
        }

        return result;
    }

  }

})();


/*

usage:

Formatutil.format(1234, "number");

returns: "1,234"

*/

