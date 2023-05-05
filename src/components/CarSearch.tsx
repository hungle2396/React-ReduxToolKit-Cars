import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, RootState } from "../store";

const CarSearch = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state: RootState) => {
        return state.cars.searchTerm;
    });

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input
                    className="input"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>
        </div>
    )
};

export default CarSearch;