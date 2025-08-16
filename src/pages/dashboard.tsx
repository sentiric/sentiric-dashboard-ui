import { Card, Title, Text, Metric } from "@tremor/react";

export default function DashboardPage() {
  return (
    <>
      <Title>Dashboard</Title>
      <Text>Platformun genel durumu.</Text>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <Text>Aktif Çağrılar</Text>
          <Metric>12</Metric>
        </Card>
        <Card>
          <Text>Bugünkü Toplam Çağrı</Text>
          <Metric>1,482</Metric>
        </Card>
        <Card>
          <Text>Ort. Çözüm Süresi (sn)</Text>
          <Metric>87</Metric>
        </Card>
      </div>
    </>
  );
}