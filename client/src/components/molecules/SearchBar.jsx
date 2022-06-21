import React from "react";
import { Input } from "../atoms";

const SearchBar = ({ value, handleChange }) => (
	<>
		<div>Search Bar</div>
		<Input
			onChange={handleChange}
		/>
	</>
);

export default SearchBar;
