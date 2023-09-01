interface StaffModel {
  name: string;
}

const Staff = ({ name }: StaffModel) => {
  return (
    <div className="hover:bg-[#855ae1] duration-500 hover:text-black cursor-pointer rounded-xl py-3 text-lg bg-[#1d1d1d] text-center">
      {name}
    </div>
  );
};

export default Staff;
