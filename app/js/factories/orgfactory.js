angular.module('orgunitmanager')
	.factory('orgfactory', ['$http', function ($http) {		
		
		//Not sure how to fetch the Url so i put it in as static.
		var urlBase = "https://apps.dhis2.org/demo/api"; 
		
		
		/*$http.get('manifest.webapp').then(function (result) {
			return result.data.activities.dhis.href + "/api";
		});
		*/
		var orgfactory = {};
		
		
		// This should return .json file of organisationUnits
		orgfactory.getOrgunits = function () {
			return $http.get(urlBase + '/organisationUnits.json');
		}
		
		// Should return details about the organisation unit
		// via the id referenced in the .json file from above function
		orgfactory.getOrgDetails = function (id) {
			return $http.get(urlBase + '/organisationUnits/' + id + '.json');
		}

		return orgfactory;
	}]);