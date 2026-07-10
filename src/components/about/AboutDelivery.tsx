"use client";

import { useEffect, useMemo, useState } from "react";
import { Mail, MapPin, Phone, Clock3, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import worldData from "world-atlas/countries-110m.json";
import CornerShape from "../ui/shape";
import { SectionHeader } from "@/components/ui/section-header";

const offices = [
  {
    id: "delhi",
    region: "India",
    tag: "Headquarters · India",
    city: "Delhi",
    state: "Delhi",
    address: "410A, 4th Floor, D21 Corporate Park, Dwarka Sector 21, New Delhi - 110077",
    phone: "+91 987 3074 893",
    email: "delhi@involead.com",
    timezone: "IST (UTC+5:30)",
    coordinates: [77.1025, 28.7041] as [number, number],
  },
  {
    id: "gurgaon",
    region: "India",
    tag: "Haryana · India",
    city: "Gurgaon",
    state: "Haryana",
    address: "Unit #323-324, 3rd Floor, JMD Megapolis, Sector 48, Gurgaon, Haryana - 122018",
    phone: "+91 987 3074 893",
    email: "gurgaon@involead.com",
    timezone: "IST (UTC+5:30)",
    coordinates: [77.0266, 28.4595] as [number, number],
  },
  {
    id: "bhubaneswar",
    region: "India",
    tag: "Odisha · India",
    city: "Bhubaneswar",
    state: "Odisha",
    address: "#201, 2nd Floor, DLF Cybercity, Patia, Bhubaneswar, Odisha - 751024",
    phone: "+91 987 3074 893",
    email: "bhubaneswar@involead.com",
    timezone: "IST (UTC+5:30)",
    coordinates: [85.8245, 20.2961] as [number, number],
  },
  {
    id: "pune",
    region: "India",
    tag: "Maharashtra · India",
    city: "Pune",
    state: "Maharashtra",
    address: "822, Suratwwala Mark Plazzo, Hinjewadi Phase 1, Pune, Maharashtra - 411057",
    phone: "+91 987 3074 893",
    email: "pune@involead.com",
    timezone: "IST (UTC+5:30)",
    coordinates: [73.8567, 18.5204] as [number, number],
  },
  {
    id: "warsaw",
    region: "Europe",
    tag: "Poland",
    city: "Warsaw",
    state: "Mazovia",
    address: "Rondo Daszynskiego 2B, 00-843 Warsaw, Poland",
    phone: "+48 22 307 44 20",
    email: "warsaw@involead.com",
    timezone: "CET (UTC+1:00)",
    coordinates: [21.0122, 52.2297] as [number, number],
  },
] as const;

type Office = (typeof offices)[number];

const regions = ["All Location", ...Array.from(new Set(offices.map((office) => office.region)))];

function WorldMap({
  selectedOfficeId,
  visibleOffices,
  onSelect,
}: {
  selectedOfficeId: string;
  visibleOffices: readonly Office[];
  onSelect: (id: Office["id"]) => void;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [mapPosition, setMapPosition] = useState({
    coordinates: [20, 18] as [number, number],
    zoom: 1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeZoom = (direction: "in" | "out") => {
    setMapPosition((current) => ({
      ...current,
      zoom:
        direction === "in"
          ? Math.min(current.zoom + 0.35, 4)
          : Math.max(current.zoom - 0.35, 1),
    }));
  };

  const resetView = () => {
    setMapPosition({
      coordinates: [20, 18],
      zoom: 1,
    });
  };

  return (
    <div className="relative overflow-hidden rounded-t-[30px] bg-[#cfeef7]">
      <div className="absolute right-4 top-4 z-20 flex gap-2">
        <button
          type="button"
          onClick={() => changeZoom("in")}
          className="grid size-10 place-items-center rounded-full border border-[#8fd3e5] bg-white/90 text-xl text-slate-700 shadow-sm transition hover:bg-white"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => changeZoom("out")}
          className="grid size-10 place-items-center rounded-full border border-[#8fd3e5] bg-white/90 text-xl text-slate-700 shadow-sm transition hover:bg-white"
          aria-label="Zoom out"
        >
          -
        </button>
        <button
          type="button"
          onClick={resetView}
          className="rounded-full border border-[#8fd3e5] bg-white/90 px-4 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-white"
        >
          Reset
        </button>
      </div>

      <div className="relative">
        {isMounted ? (
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 145 }}
            className="h-[300px] w-full sm:h-[360px] lg:h-[430px]"
          >
            <ZoomableGroup
              center={mapPosition.coordinates}
              zoom={mapPosition.zoom}
              onMoveEnd={({ coordinates, zoom }: { coordinates: number[]; zoom: number }) =>
                setMapPosition({
                  coordinates: coordinates as [number, number],
                  zoom,
                })
              }
              maxZoom={4}
              minZoom={1}
              translateExtent={[
                [-320, -120],
                [1520, 760],
              ]}
            >
              <Geographies geography={worldData}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: "#ffffff",
                          stroke: "#d7dce1",
                          strokeWidth: 0.8,
                          outline: "none",
                        },
                        hover: {
                          fill: "#ffffff",
                          stroke: "#d7dce1",
                          strokeWidth: 0.8,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#ffffff",
                          stroke: "#d7dce1",
                          strokeWidth: 0.8,
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>

              {visibleOffices.map((office) => {
                const selected = office.id === selectedOfficeId;

                return (
                  <Marker
                    key={office.id}
                    coordinates={office.coordinates}
                    onClick={() => onSelect(office.id)}
                  >
                    <g className="cursor-pointer">
                      <circle
                        r={selected ? 19 : 14}
                        fill="rgba(63,127,146,0.16)"
                      />
                      <circle
                        r={selected ? 13 : 9}
                        fill={selected ? "#1d1d1d" : "#3f7f92"}
                      />
                    </g>

                    {selected ? (
                      <foreignObject x={18} y={6} width={250} height={110}>
                        <div className="rounded-[18px] border border-[#91d6e8] bg-white/95 px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                          <p className="text-[18px] font-medium leading-none text-slate-900">
                            {office.city}
                          </p>
                          <p className="mt-2 text-[14px] leading-5 text-slate-500">
                            {office.tag}
                          </p>
                        </div>
                      </foreignObject>
                    ) : null}
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>
        ) : (
          <div className="h-[300px] w-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.88),rgba(207,238,247,0.96))] sm:h-[360px] lg:h-[430px]" />
        )}
      </div>
    </div>
  );
}

export default function AboutDelivery() {
  const [selectedRegion, setSelectedRegion] = useState("All Location");
  const [selectedOfficeId, setSelectedOfficeId] = useState<Office["id"]>(offices[0].id);

  const filteredOffices = useMemo(() => {
    if (selectedRegion === "All Location") {
      return offices;
    }

    return offices.filter((office) => office.region === selectedRegion);
  }, [selectedRegion]);

  useEffect(() => {
    if (!filteredOffices.some((office) => office.id === selectedOfficeId)) {
      setSelectedOfficeId(filteredOffices[0]?.id ?? offices[0].id);
    }
  }, [filteredOffices, selectedOfficeId]);

  const selectedOffice =
    filteredOffices.find((office) => office.id === selectedOfficeId) ?? filteredOffices[0] ?? offices[0];

  return (
    <section className="bg-white relative py-20  xl:py-28">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Global Presence"
          title="Delivering Expertise Across Global Markets"
          description="With teams supporting clients across multiple regions, we combine global experience with local execution to help organizations solve complex business challenges wherever they operate."
          align="center"
          maxWidth="5xl"
          descriptionWidth="3xl"
          textColor="black"
          titleClassName="mx-auto max-w-2xl"
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.04)] md:p-6">
            <h3 className="text-[22px] font-medium text-slate-900">Filter by Region</h3>

            <div className="relative mt-4">
              <select
                value={selectedRegion}
                onChange={(event) => setSelectedRegion(event.target.value)}
                className="h-12 w-full appearance-none rounded-[14px] border border-slate-200 bg-slate-50 px-4 pr-11 text-[18px] text-slate-700 outline-none transition focus:border-[#6fc2d8] focus:bg-white"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
            </div>

            <div className="mt-4 max-h-[500px] space-y-3 overflow-auto pr-1">
              {filteredOffices.map((office) => {
                const active = office.id === selectedOffice.id;

                return (
                  <button
                    key={office.id}
                    type="button"
                    onClick={() => setSelectedOfficeId(office.id)}
                    className={`w-full rounded-[18px] border p-4 text-left transition ${
                      active
                        ? "border-[#b9e3ef] bg-[#E7F5F8] shadow-[0_10px_30px_rgba(111,194,216,0.12)]"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <p className="text-[15px] leading-6 text-slate-500">{office.tag}</p>
                    <p className="mt-1 text-[22px] font-medium leading-none text-slate-900">
                      {office.city}
                    </p>
                    <p className="mt-3 line-clamp-2 text-[16px] leading-7 text-slate-700">
                      {office.address}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-0 shadow-[0_10px_40px_rgba(15,23,42,0.04)]">
            <WorldMap
              selectedOfficeId={selectedOffice.id}
              visibleOffices={filteredOffices}
              onSelect={setSelectedOfficeId}
            />

            <motion.div
              key={selectedOffice.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="m-8 rounded-[24px] bg-[#E7F5F8] p-6 md:m-5 md:p-7"
            >
              <h3 className="text-[30px] font-medium leading-none text-slate-900">
                {selectedOffice.city}
              </h3>
              <p className="mt-2 text-[20px] text-slate-700">{selectedOffice.tag}</p>

              <div className="mt-6 flex items-start gap-4 text-slate-800">
                <MapPin className="mt-1 size-5 shrink-0 text-[#4ba8c2]" />
                <p className="text-[18px] leading-8">{selectedOffice.address}</p>
              </div>

              <div className="mt-6 h-px bg-[#cddfe6]" />

              <div className="mt-5 grid gap-4 text-[18px] leading-7 text-slate-800 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-[#4ba8c2]" />
                  <span>{selectedOffice.phone}</span>
                </div>
                <div className="hidden h-6 w-px bg-[#bdd6de] lg:block" />
                <div className="flex items-center gap-3">
                  <Mail className="size-5 text-[#4ba8c2]" />
                  <span>{selectedOffice.email}</span>
                </div>
                <div className="hidden h-6 w-px bg-[#bdd6de] lg:block" />
                <div className="flex items-center gap-3">
                  <Clock3 className="size-5 text-[#4ba8c2]" />
                  <span>{selectedOffice.timezone}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[6px] left-0 w-[290px] bg-black">
                    <CornerShape color="#fff" />
                  </div>
    </section>
  );
}
