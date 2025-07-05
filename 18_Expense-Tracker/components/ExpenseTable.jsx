import TR from "./TR";

export default function ExpenseTable({ref}) {
  const th_td_css="border-[1px] border-solid border-[#444] text-left py-1 px-2"
  return (
    <table className="expense-table w-full table-bordered"  >
      <thead>
        <tr>
          <th className={th_td_css}>Title</th>
          <th className={th_td_css}>
            <select className="text-inherit w-full border-none outline-none">
              <option value="">All</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </th>
          <th className={`${th_td_css} amount-column `}>
            <div className="flex">
              <span className="mr-1.5">Amount</span>
             <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow up-arrow transition-transform duration-200 ease-in-out cursor-pointer ml-auto active:-translate-y-0.5"
                  >
                    <title>Ascending</title>
                    <path
                      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow down-arrow transition-transform duration-200 ease-in-out cursor-pointer ml-1.5 active:translate-y-0.5"
                  >
                    <title>Descending</title>
                    <path
                      d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                  </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody ref={ref}>
       <TR v1="Milk" v2="Grocery" v3="₹40"/>
       <TR v1="Shirt" v2="Clothes" v3="₹600"/>
       <TR v1="vegetables" v2="Grocery" v3="₹100"/>
       <TR v1="Electricity Bill" v2="Bills" v3="₹1100"/>
       <tr style={{pointerEvents:"none"}}>
        <th className={th_td_css}>Total</th>
        <th className={th_td_css}></th>
        <th className={th_td_css}>₹8100</th>
       </tr>
      </tbody>
    </table>
  );
}
