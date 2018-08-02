/*
* entry point of react application
* */

import React from 'react';
import {render} from 'react-dom';
import KanbanBoardContainer from './component/KanbanBoardContainer';
import TestContainer from './test_component/testContainer';

// let cardsList = [
// 	{
// 		id : 1,
// 		title : 'Read the Book',
// 		description : "I shoud read the **whole** book",
// 		color : '#BD8D31',
// 		status : "in-progress",
// 		tasks : []
// 	},
// 	{
// 		id: 2,
// 		title : "write some code",
// 		description : "Code along with the samples in the book. The complete source can be found at" +
// 		" [github](https://github.com/pro-react)",
// 		color : '#3A7E28',
// 		status : "todo",
// 		tasks : [
// 			{
// 				id : 1,
// 				name : "ContactList Example",
// 				done : true
// 			},
// 			{
// 				id : 2,
// 				name : 'Kanban Example',
// 				done : false
// 			},
// 			{
// 				id : 3,
// 				name : "My own experiments",
// 				done : false
// 			}
// 		]
// 	}
// ];


render(<KanbanBoardContainer />, document.getElementById('root'));
render(<TestContainer />, document.getElementById('testRoot'));
