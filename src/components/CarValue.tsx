import { useSelector } from "react-redux";
import { RootState } from "../store";

const CarValue = () => {
    const totalCost = useSelector((state: RootState) => {
        const data = state.cars.data;
        const searchTerm = state.cars.searchTerm;

        // return all the cars that are currently in the car list section
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        let cost = 0;

        for (let car of filteredCars) {
            cost += car.cost;
        }

        return cost;
    });

    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    )
};

export default CarValue;