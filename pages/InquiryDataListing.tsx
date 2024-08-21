import { useEffect, useState } from "react";
import { auth } from "../src/config/firebase/config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import WithAuth from "../src/components/WithAuth";
import { getFormData } from "@/config/firebase/fireStoreHelpers";

interface InquiryData {
  ZipCode: number;
  id: string;
  name: string;
  email: string;
  address: string;
  whatsappNumber: string;
  cleaningTime: any;
  fileUrl: any;
  capacity: any;
  requirement: string;
  monthlyBill: number;
  propertyType: string;
  repairOrCleaning: string;
  inverterBrand: string;
  panelBrand: string;
  structureHeight: string;
}

const InquiryDataListing = () => {
  const [rows, setRows] = useState<InquiryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getFormData();
      const formattedItems: InquiryData[] = items.map((item) => ({
        id: item.id,
        ZipCode: item.ZipCode || 0,
        name: item.name || "",
        email: item.email || "",
        address: item.address || "",
        whatsappNumber: item.whatsappNumber || "",
        cleaningTime: item.cleaningTime || "",
        fileUrl: item.fileUrl || "",
        capacity: item.capacity || "",
        requirement: item.requirement || "",
        monthlyBill: item.monthlyBill || 0,
        propertyType: item.propertyType || "",
        repairOrCleaning: item.repairOrCleaning || "",
        inverterBrand: item.inverterBrand || "",
        panelBrand: item.panelBrand || "",
        structureHeight: item.structureHeight || "",
      }));
      setRows(formattedItems);
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const columns: GridColDef[] = [
    { field: "ZipCode", headerName: "ZipCode" },
    { field: "requirement", headerName: "Requirement" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "address", headerName: "Address" },
    { field: "whatsappNumber", headerName: "Whatsapp Number" },
    { field: "typesOfRoof", headerName: "Types Of Roof" },
    { field: "cleaningTime", headerName: "Cleaning Time" },
    {
      field: "fileUrl",
      headerName: "Module Drawing",
      renderCell: (params: any) => {
        const value = params?.value?.split("%").slice(1).join("%");
        return (
          <Link
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
            href={params?.value || ""}
            target="_blank"
          >
            {value || ""}
          </Link>
        );
      },
      width: 200,
    },
    { field: "capacity", headerName: "Capacity" },
    { field: "monthlyBill", headerName: "Monthly Bill" },
    { field: "propertyType", headerName: "Property Type" },
    { field: "repairOrCleaning", headerName: "Repair Or Cleaning" },
    { field: "inverterBrand", headerName: "Inverter Brand" },
    { field: "panelBrand", headerName: "Panel Brand" },
    { field: "structureHeight", headerName: "Structure Height" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Inquiry Form Data Listing</h1>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <Box
        sx={{
          height: `${100 - 25}vh`,
          width: "90vw",
        }}
      >
        <DataGrid columns={columns} rows={rows} pageSizeOptions={[5, 10, 25]} />
      </Box>
    </div>
  );
};

export default WithAuth(InquiryDataListing);
