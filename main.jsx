angular.module('MailboxApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/inbox");
	$stateProvider.state("inbox", {
		url: "/inbox",
		//templateUrl: "partials/inbox.html",
		controller: function ($scope, messageStore, $element, $filter) {
			//$scope.messages = messageStore.getMessages();
			var MessageList = React.createClass({
				render: function () {
					return (
					<div>
						<div><h2>You have {this.props.messages.length} Unread Messages</h2></div>
						<table>
							<thead>
								<th>Sender</th>
								<th>Subject</th>
								<th>Date</th>
							</thead>
							{this.props.messages.map(function (m, i) {
								return (
									<tr key={i}>
										<td>{m.sender}</td>
										<td>
											<a href={"/#/message/" + i}>
												{m.subject}
											</a>
										</td>
										<td>{$filter('date')(m.date)}</td>
									</tr>
								)
							})}
						</table>
					</div>
					)
				}
			})

			var messages = messageStore.getMessages();
			ReactDOM.render(<MessageList messages={messages}/>, $element[0])

		}
	})
	.state('message', {
		url: "/message/:id",
		templateUrl: "partials/message.html",
		controller: function ($scope, messageStore, $stateParams) {
			$scope.message = messageStore.getMessages()
			.filter(function (message) {
				return message.id == $stateParams.id;
			})[0];
		}
	})
}])
.service('messageStore', function () {
	var messages = [];
	var sampleSize = 100;
	for (var i = 0; i < sampleSize; i++) {
		messages.push({
			sender: "breeze.bling"+i+"@gmail.com",
			date: Date.now() - i * 2400000000,
			id:i,
			subject: "Regarding report #" + i,
			body: "Hey breeze, Where's report #" + i + "?"
		});
	}

	return {
		getMessages: function () {
			return messages;
		}
	}
})