import Alert from "../Alert/Alert";
import { Line } from 'react-chartjs-2';
import { CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { chartDays } from "../../Helpers/Constants.js";

Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

function CoinInfo({ historicData, setDays, setCoinInterval, days, currency }) {
    const handleDayChange = (e) => {
        const daysSelected = e.target.value;
        if (daysSelected === '1') {
            setCoinInterval?.('');
        } else {
            setCoinInterval?.('daily');
        }
        setDays?.(daysSelected);
    };

    if (!historicData) {
        return <Alert message="No data available" type="warning" />;
    }

    return (
        <div className="flex flex-col items-center justify-center mt-6 p-6 w-full">
            <div className="h-[500px] w-full">
                <Line
                    data={{
                        labels: historicData.prices.map(coinPrice => {
                            const date = new Date(coinPrice[0]);
                            const time = date.getHours() > 12
                                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                : `${date.getHours()}:${date.getMinutes()} AM`;
                            return days === '1' ? time : date.toLocaleDateString();
                        }),
                        datasets: [
                            {
                                label: `Price (Past ${days} ${days === '1' ? 'Day' : 'Days'}) in ${currency?.toUpperCase()}`,
                                data: historicData.prices.map(coinPrice => coinPrice[1]),
                                borderColor: '#ff6600',
                                backgroundColor: 'rgba(255, 102, 0, 0.2)',
                            }
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        elements: {
                            point: {
                                radius: 0,
                            },
                        },
                        plugins: {
                            legend: {
                                display: true,
                            },
                            tooltip: {
                                callbacks: {
                                    label: (tooltipItem) => `${tooltipItem.dataset.label}: $${tooltipItem.raw}`,
                                },
                            },
                        },
                    }}
                />
            </div>

            <div className="flex justify-center mt-5 w-full">
                <select
                    className="select select-primary w-full max-w-xs"
                    onChange={handleDayChange}
                    value={days}
                >
                    {chartDays.map((day) => (
                        <option key={day.value} value={day.value}>
                            {day.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default CoinInfo;
