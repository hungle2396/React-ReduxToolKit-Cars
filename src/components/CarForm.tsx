import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar, RootState } from "../store";


const CarForm = () => {
    const dispatch = useDispatch();

    const { name, cost } = useSelector((state: RootState) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(event.target.value));
    }

    const handleCostChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const numberValue = parseInt(event.target.value);
        dispatch(changeCost(numberValue));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(addCar({
            name: name,
            cost: cost
        }));
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input className="input is-expanded" value={name} onChange={handleNameChange}/>
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input className="input is-expanded" type="number" value={cost || ""} onChange={handleCostChange}/>
                    </div>
                </div>

                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default CarForm;