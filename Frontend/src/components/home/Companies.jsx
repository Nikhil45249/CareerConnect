import React from "react";

const companies = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPLl6EcgNF-mpIBMwMf6Pbm2HGVbHJ-1Rmg&s",
  },
  {
    img: "https://www.pngmart.com/files/Amazon-Logo-PNG-Free-Download.png",
  },
  {
    img: "https://cdn-public.softwarereviews.com/production/logos/offerings/2193/original/Microsoft-Logo.png?1764320118",
  },
  {
    img: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
  },
  {
    img: "https://aniportalimages.s3.amazonaws.com/media/details/unnamed2022012605492720220126055506.jpg",
  },
  {
    img: "https://image.savethechildren.org/accenture-recpng-ch11044225.png/l1sv1ycy3u0e5748i4224eil34kyh773.png",
  },
];

const Companies = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      {/* Heading */}

      <h2 className="text-center text-2xl font-bold mb-10">
        Trusted by 500+ Companies
      </h2>

      {/* Company Logos */}

      <div className="flex flex-wrap justify-center items-center gap-12">

        {companies.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt="Company Logo"
            className="h-20 object-contain  hover:grayscale-0 transition duration-300 cursor-pointer"
          />
        ))}

      </div>

    </section>
  );
};

export default Companies;