import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";

const App = () => {
	return (
		<div>
      <SearchBar/>
			<TransactionForm />
			<TransactionTable />
		</div>
	);
};

export default App;
