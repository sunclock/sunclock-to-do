import * as React from 'react';
import {
	BrowserRouter,
	Routes, 
	Route
} from 'react-router-dom'
import {
  RecoilRoot,
} from 'recoil';
// page
import { Calendar, EditTodo, CreateTodo, Home, Todo, Welcome } from './todo/page';
import './input.css';

function App() {
	return (
    <RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route path ="/" element={<Welcome />} />
					<Route path ="/home" element={<Home />} />
					<Route path ="/todo" element={<Calendar />} /> {/* 전체 보기 */}
					<Route path="/todo/:todoId" element={<Todo />} />  {/* 할 일 자세히 보기 */}
					<Route path="/todo/create" element={<CreateTodo />} />  {/* 할 일 생성 */}
					<Route path="/todo/edit/:todoId" element={<EditTodo />} /> {/* 할 일 수정 */}
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App;
