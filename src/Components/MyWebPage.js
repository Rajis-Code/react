import Raji from '../assets/images/Rajeswari.jpg'

export default function MyWebPage() {
    return (
        <div className="flex justify-center items-center ">
            <div className="bg-blue-200 p-4 w-[800px] relative "> 
                <div className="text-4xl font-bold text-center">About Me</div>
                <div className="flex flex-col">
                    <div>
                        <div className="text-2xl font-bold mt-5">Introduction :</div>
                        <div className="mt-5 w-[500px]">
                            <p>1. Full Name : Joga Rajeswari</p>
                            <p>2. Age: 21</p> 
                            <p>3. Email: rajeswari123@gmail.communication</p>
                            <p>4. Mobile No.: 6302323188 </p>
                            <p>5. Profession: Testing Engineer </p>
                        </div>
                        <div className="text-2xl font-bold mt-5">Hobbies :</div>
                        <div className="mt-5">
                            <p>1. Travelling</p>
                            <p>2. Cooking</p>
                            <p>3. Reading Books</p>
                            <p>4. Exploring New Things</p>  
                        </div>
                        <div className="text-2xl font-bold mt-5">Academics Qualification :</div>
                        <div className="mt-5 w-[700px]">
                            <p>1. Bachelor of Technology in Electronic communication Engineering from Malla Reddy college of Engineering for Approved by AICTE, New Delhi & Affiliated to JNTU-H in the year  (2019-2023), with an aggregate 70%.</p>
                            <p>2. Intermediate from Sri Gayatri jr college affiliated to board of intermediate education, Telanagana in the year (2018-2019), with an aggregate 85.5%.</p>
                            <p>3. S.S.C from Bhavani High school affiliated to the board of secondary Education, Telanagana in the year 2017 with an aggregate (CGPA-8.3)</p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 mt-20 pr-10 "> 
                        <img src={Raji} className="h-[250px] w-[300px]" alt="My potta image" style={{ border: '2px solid black' }} />
                    </div>
                </div>
                <div className="text-2xl font-bold text-center mt-10">Thank You</div>
            </div>
        </div>
    );
}