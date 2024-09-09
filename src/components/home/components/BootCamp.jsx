import Skills from "../Skills";

const BootCampItems = ({number ,title }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">{number}</span>
        </div>
        <div>
            <p className="text-lg font-semibold">{title}</p>
        </div>
    </div>
)

const bootcamps = [
    {title: 'Samsung Innovation Campus'},
    {title: 'Webinar Bersama KMTek'},
];

export default function BootCamp() {
    return (
        <div className="flex-1 p-6 md:pl-12">
            <h2 className="text-2xl font-bold mb-4">Bootcamp</h2>
            <div className="space-y-4">
                {bootcamps.map((title, index) => (
                <BootCampItems
                    number={index + 1}
                    title={title.title}
                />
                ))}      
            </div>
        </div>
    )
}