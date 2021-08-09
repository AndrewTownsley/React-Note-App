
const Search = ({ setSearchText }) => {

    return (
        <header className="search-header">
            <form onChange={(event) => setSearchText(event.target.value)} action="submit">
                <label htmlFor="note-search">
                    <input type="text" name="search" id="search"/>
                </label>
            </form>
        </header>
    )
}

export default Search;