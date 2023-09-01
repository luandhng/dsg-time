import Staff from "@/components/staff/Staff";
import Week from "@/components/staff/Week";

const Admin = () => {
  return (
    <div className="max-w-5xl font-medium py-1 space-y-1 m-auto h-screen">
      {/* Date */}
      <div className="grid grid-cols-6 gap-1">
        <div className="bg-[#855ae1] col-span-5 text-center py-3 text-black text-xl rounded-xl">
          08/27/23 - 09/10/23
        </div>
        <div className="flex text-[#855ae1] duration-500 cursor-pointer hover:bg-[#855ae1] hover:text-black justify-center items-center bg-[#1d1d1d] rounded-xl">
          ADD STAFF
        </div>
      </div>

      {/* Staffs */}
      <div className="grid grid-cols-6 gap-1">
        <Staff name={"BINH"} />
        <Staff name={"CUONG"} />
        <Staff name={"DUNG"} />
        <Staff name={"MIGUE"} />
        <Staff name={"XUAN"} />
        <Staff name={"LUAN"} />
      </div>

      {/* Main Points */}
      <div className="grid grid-cols-2 gap-1">
        <div className="flex flex-col justify-between bg-[#8f9b9d] text-black rounded-xl p-5 text-5xl">
          <div>Migue</div>
          <div className="">80H</div>
        </div>
        <div className="flex flex-col gap-1 text-3xl text-black">
          <div className="flex items-center flex-1 rounded-xl p-6 bg-[#5dbe74]">
            $960
          </div>
          <div className="flex justify-between items-center flex-1 rounded-xl p-6 bg-[#e1d35a]">
            <div>$460</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="w-11 h-11"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center flex-1 rounded-xl p-6 bg-[#e1d35a]">
            <div>$500</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm48 160H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 336c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zM376 160h80c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Weeks */}
      <div className="grid gap-1 grid-cols-3">
        <Week date={"Mon"} />
        <Week date={"Tue"} />
        <Week date={"Wed"} />
        <Week date={"Thu"} />
        <Week date={"Fri"} />
        <Week date={"Sat"} />

        <Week date={"MON"} />
        <Week date={"TUE"} />
        <Week date={"WED"} />
        <Week date={"THU"} />
        <Week date={"FRI"} />
        <Week date={"SAT"} />
      </div>
    </div>
  );
};

export default Admin;
