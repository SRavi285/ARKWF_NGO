import React from 'react'

const Donate = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center p-2'>Donate On Archana RamKishori Welfare Foundation</h1>
      <div className='m-6 grid grid-cols-1 md:grid-cols-2 text-xl '>
        <div className='mb-6 shadow-xl p-5'>
          <h2 className='text-blue-800 text-2xl font-semibold mb-2'>Bank Details</h2>
          <p> <strong>Bank Name:</strong> State Bank Of India</p>
          <p> <strong>Account Holder Name:</strong> Archana RamKishori Welfare Foundation</p>
          <p> <strong>Account Number:</strong> 20530224133</p>
          <p><strong>Account Type:</strong> Current Account</p>
          {/* <p>Swift Code: Lorem ipsum dolor sit amet.</p> */}
          <p><strong>IFSC Code:</strong> SBIN0000019</p>
          {/* <p><strong>MICR Code:</strong> 271002202</p> */}
          <p><strong>Branch Address:</strong> Veer Vinay Chawk, Balrampur, Uttar Pradesh, India 271201</p>
        </div>
        <div className='mb-6 shadow-xl p-5'>
          <h2 className='text-blue-800 text-2xl font-semibold mb-2'>Cheque and Draft</h2>
          <p>Please make your cheque/draft in the name of <strong>Archana RamKishori Welfare Foundation</strong> and send it Church Road, Pahalwara, Balrampur, Uttar Pradesh, India, 271201.</p>
        </div>
      </div>
    </div>
  )
}

export default Donate