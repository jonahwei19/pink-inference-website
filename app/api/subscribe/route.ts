import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// // Custom CORS middleware
// const cors =
//   (handler: any) => (request: NextApiRequest, response: NextApiResponse) => {
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     response.setHeader(
//       "Access-Control-Allow-Headers",
//       "Authorization, Content-Type"
//     );
//     return handler(request, response);
//   };

export async function POST(request: Request) {
  console.log("Received request");
  const { firstName, lastName, email, userTypeFinal } = await request.json();

  try {
    console.log("first", firstName);
    console.log("last", lastName);
    console.log("email", email);
    console.log("usertype", userTypeFinal);
    const response = await axios.post(
      "https://api.apispreadsheets.com/data/iDoK3LA2izgfLFi6/",
      {
        data: {
          Last: lastName,
          Email: email,
          First: firstName,
          Type: userTypeFinal,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      // SUCCESS
      return NextResponse.json({
        message: "Upload Successful",
      });
    } else {
      return NextResponse.json({ message: "Failed to Upload" });
    }
  } catch (error) {
    console.error("Error uploading data:", error);
    return NextResponse.json({ message: "Failed to Upload" });
  }
}

// Handler for the POST method
export function GET(req: NextApiRequest, res: NextApiResponse) {
  // Handle the POST request here
}

// Apply the custom CORS middleware to the handler
// export default cors(handler);
