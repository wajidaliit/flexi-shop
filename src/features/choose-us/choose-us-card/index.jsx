 

export default function ChooseUsCard({ data }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {data?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center md:justify-start md:items-start p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex justify-center items-center w-16 h-16 bg-gray-100 rounded-lg mb-4">
            <img src={item.img} alt={item.title} className="w-8 h-8" />
          </div>
          <h3 className="text-center md:text-start text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-center md:text-start text-gray-500">{item.des}</p>
        </div>
      ))}
    </div>
  );
}
