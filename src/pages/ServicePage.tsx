import { Navigate, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { getServiceBySlug } from "@/data/serviceCatalog";
import {
  ServiceFamilyLayoutA,
  ServiceFamilyLayoutB,
  ServiceFamilyLayoutC,
} from "@/components/services/ServiceFamilyLayouts";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <Layout>
      {service.templateFamily === "A" && <ServiceFamilyLayoutA service={service} />}
      {service.templateFamily === "B" && <ServiceFamilyLayoutB service={service} />}
      {service.templateFamily === "C" && <ServiceFamilyLayoutC service={service} />}
    </Layout>
  );
}
