import { useSelector, useDispatch } from "react-redux";
import { removeCar, RootState } from "../store";

const CarList = () => {
    const dispatch = useDispatch();

    const cars = useSelector((state: RootState) => {
        const data = state.cars.data;
        const searchTerm = state.cars.searchTerm;


        return data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    });

    const handleCarDelete = (car: CarProps) => {
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car: CarProps) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>

                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        )
    })

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    )
};

export default CarList;