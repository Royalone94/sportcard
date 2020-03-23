import { colors } from '../../styles/variables'
import { Form, Label } from 'reactstrap'

const SearchBox = (props) => (
    <Form className="search" action="/search">
      <div className="position-relative form-group">
        <Label for="search" hidden>Search</Label>
        <input 
          type="search" 
          name="q" 
          id="search" 
          placeholder="Search for a player, team or brand" 
          className="form-control" />
        <button type="submit" className="search-button btn btn-link">
          <img src="/static/icons/icon-search.svg" alt="Search"/>
        </button>
      </div>
      {/* styles */}
      <style jsx>{`
        .search {
          margin-left: 1.5rem;
        }
        .form-group {
          margin-bottom: 0;
        }
        input[type='search'] {
          background: ${colors.white};
          border: none;
          height: 35px;
          margin-bottom: 0;
          border-radius: 1.5rem;
          font-size: 12px;
          color: ${colors.black};
          width: 90%;
          margin: 0 auto;
        }
        input[type='search']:focus {
          border: solid 1px ${colors.green};
        }
        button {
          position: absolute;
          top: 44%;
          right: 15px;
          transform: translateY(-50%);
          border-radius: 50%;
          border: none;
        }
        button img {
          width: 15px;
        }
      `}</style>
    </Form>
)

export default SearchBox