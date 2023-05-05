import { useSelector, useDispatch } from "react-redux";
import { removeCar, RootState } from "../store";

const CarList = () => {
    const dispatch = useDispatch();

    const { cars, name } = useSelector((state: RootState) => {
        const data = state.cars.data;
        const searchTerm = state.cars.searchTerm;

        const filteredCars =  data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        return {
            cars: filteredCars,
            name: state.form.name
        }
    });

    const handleCarDelete = (car: CarProps) => {
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car: CarProps) => {
        // Decide if this  car should be bold
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold ? "bold" : ""}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>

                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        )
    });

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    )
};

export default CarList;