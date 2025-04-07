import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import SimilarComp from "../Company/SimilarComp";
import Company from "../Company/Company";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4  ">
      <Divider />
      <Button
        size="sm"
        onClick={() => navigate(-1)}
        my="lg"
        color="brightSun.4"
        leftSection={<IconArrowLeft size={20} />}
        variant="light"
      >
        Back
      </Button>
      <div className="flex gap-5 justify-between">
        <Company />
        <SimilarComp />
      </div>
    </div>
  );
};
export default CompanyPage;
