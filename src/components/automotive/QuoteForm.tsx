import { useState } from "react";
import {
  Sparkles,
  Car,
  Truck,
  Calendar,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Check,
  Droplets,
  Zap,
  Info,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { packages } from "./Pricing";

const vehicleClasses = [
  { id: "coupe", label: "Coupe / Sedan", sub: "Standard Size", priceIndex: 0, icon: Car },
  { id: "suv", label: "Mid-Size SUV / 2D Truck", sub: "Mid-Size Chassis", priceIndex: 1, icon: Truck },
  { id: "full", label: "Full SUV / 4D Truck / Exotic", sub: "Full Chassis & Supercars", priceIndex: 2, icon: Sparkles },
];

const arrivalSlots = [
  { id: "morning", label: "Morning Window", time: "8:00 AM – 11:00 AM" },
  { id: "midday", label: "Midday Window", time: "11:00 AM – 2:00 PM" },
  { id: "afternoon", label: "Afternoon Window", time: "2:00 PM – 5:00 PM" },
  { id: "evening", label: "Evening Window", time: "5:00 PM – 7:00 PM" },
];

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [sent, setSent] = useState(false);

  // Form State
  const [selectedService, setSelectedService] = useState("Panache");
  const [selectedVehicleClass, setSelectedVehicleClass] = useState("coupe");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");

  const [preferredDate, setPreferredDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("morning");
  const [serviceAddress, setServiceAddress] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  // Current package and price calculations
  const activePackage = packages.find((p) => p.name === selectedService) ?? packages[2]!;
  const currentClass = vehicleClasses.find((c) => c.id === selectedVehicleClass) ?? vehicleClasses[0]!;
  const calculatedPrice = activePackage.prices[currentClass.priceIndex] ?? activePackage.prices[0];
  const activeSlot = arrivalSlots.find((s) => s.id === preferredSlot) ?? arrivalSlots[0]!;

  const handleStepNext = () => {
    if (currentStep === 1) {
      if (!vehicleMake.trim() || !vehicleModel.trim()) {
        toast.error("Please enter your vehicle make and model to proceed.");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!serviceAddress.trim()) {
        toast.error("Please enter your service address or city.");
        return;
      }
      setCurrentStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim() || !email.trim()) {
      toast.error("Please complete all required contact fields.");
      return;
    }
    setSent(true);
    toast.success("Concierge Reservation Confirmed!", {
      description: `Thank you, ${firstName}. Your ${activePackage.name} treatment for your ${vehicleYear || ""} ${vehicleMake} ${vehicleModel} has been logged. Our lead detailer will reach out within 2 hours.`,
    });
  };

  const handleReset = () => {
    setSent(false);
    setCurrentStep(1);
    setSelectedService("Panache");
    setSelectedVehicleClass("coupe");
    setVehicleMake("");
    setVehicleModel("");
    setVehicleYear("");
    setPreferredDate("");
    setPreferredSlot("morning");
    setServiceAddress("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setSpecialRequests("");
  };

  return (
    <section
      id="free-estimate"
      className="relative overflow-hidden bg-background py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div id="estimate" className="pointer-events-none absolute -top-24" />
      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[500px] rounded-full bg-emerald-500/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="eyebrow mb-3 justify-center">
            <span />
            <span className="text-primary font-extrabold tracking-widest text-[11px] uppercase">
              CONCIERGE VEHICLE CONFIGURATOR
            </span>
            <span />
          </div>
          <h2 className="text-2xl sm:text-[32px] md:text-[38px] font-extrabold tracking-tight text-foreground leading-tight">
            Reserve Your Detailing Experience.{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-600 bg-clip-text text-transparent">
              Tailored in 3 Simple Steps.
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground mx-auto">
            Backed by 17+ years of master craftsmanship. Choose your vehicle class, treatment package,
            and preferred arrival window. Our self-contained laboratory brings museum-grade detailing
            directly to your private location.
          </p>
        </div>

        {/* 3-STEP PROGRESS NAVIGATION TRACK */}
        <div className="mx-auto mb-8 max-w-3xl">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {/* Step 1 Pill */}
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className={cn(
                "flex items-center gap-2 sm:gap-3 rounded-2xl p-2.5 sm:p-3.5 text-left border transition-all cursor-pointer",
                currentStep === 1
                  ? "border-primary bg-card shadow-sm ring-2 ring-primary/20"
                  : currentStep > 1
                  ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300"
                  : "border-border/80 bg-surface/40 opacity-75"
              )}
            >
              <div
                className={cn(
                  "flex size-6 sm:size-7 shrink-0 items-center justify-center rounded-full text-xs font-black transition-colors",
                  currentStep === 1
                    ? "bg-primary text-white"
                    : currentStep > 1
                    ? "bg-emerald-600 text-white"
                    : "bg-surface text-muted-foreground"
                )}
              >
                {currentStep > 1 ? <Check className="size-3.5" /> : "1"}
              </div>
              <div className="truncate">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                  Step 01
                </div>
                <div className="text-xs sm:text-sm font-bold text-foreground truncate">
                  <span className="xs:hidden">Vehicle</span>
                  <span className="hidden xs:inline">Vehicle & Package</span>
                </div>
              </div>
            </button>

            {/* Step 2 Pill */}
            <button
              type="button"
              onClick={() => {
                if (vehicleMake && vehicleModel) setCurrentStep(2);
              }}
              className={cn(
                "flex items-center gap-2 sm:gap-3 rounded-2xl p-2.5 sm:p-3.5 text-left border transition-all cursor-pointer",
                currentStep === 2
                  ? "border-primary bg-card shadow-sm ring-2 ring-primary/20"
                  : currentStep > 2
                  ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300"
                  : "border-border/80 bg-surface/40 opacity-75"
              )}
            >
              <div
                className={cn(
                  "flex size-6 sm:size-7 shrink-0 items-center justify-center rounded-full text-xs font-black transition-colors",
                  currentStep === 2
                    ? "bg-primary text-white"
                    : currentStep > 2
                    ? "bg-emerald-600 text-white"
                    : "bg-surface text-muted-foreground"
                )}
              >
                {currentStep > 2 ? <Check className="size-3.5" /> : "2"}
              </div>
              <div className="truncate">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                  Step 02
                </div>
                <div className="text-xs sm:text-sm font-bold text-foreground truncate">
                  <span className="xs:hidden">Date</span>
                  <span className="hidden xs:inline">Date & Location</span>
                </div>
              </div>
            </button>

            {/* Step 3 Pill */}
            <button
              type="button"
              onClick={() => {
                if (vehicleMake && vehicleModel && serviceAddress) setCurrentStep(3);
              }}
              className={cn(
                "flex items-center gap-2 sm:gap-3 rounded-2xl p-2.5 sm:p-3.5 text-left border transition-all cursor-pointer",
                currentStep === 3
                  ? "border-primary bg-card shadow-sm ring-2 ring-primary/20"
                  : "border-border/80 bg-surface/40 opacity-75"
              )}
            >
              <div
                className={cn(
                  "flex size-6 sm:size-7 shrink-0 items-center justify-center rounded-full text-xs font-black transition-colors",
                  currentStep === 3
                    ? "bg-primary text-white"
                    : "bg-surface text-muted-foreground"
                )}
              >
                3
              </div>
              <div className="truncate">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                  Step 03
                </div>
                <div className="text-xs sm:text-sm font-bold text-foreground truncate">
                  <span className="xs:hidden">Confirm</span>
                  <span className="hidden xs:inline">Contact & Confirm</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* MAIN CONFIGURATOR CARD & LIVE SUMMARY SIDEBAR */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* LEFT: Dynamic Step Wizard Content (8 Cols) */}
          <div className="rounded-[2rem] sm:rounded-[2.5rem] border border-border/80 bg-card p-4 sm:p-8 lg:p-10 shadow-xl ring-1 ring-border/20 lg:col-span-8">
            {sent ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center p-4 sm:p-8">
                <div className="flex size-20 items-center justify-center rounded-full border-2 border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shadow-xl animate-in zoom-in-50 duration-300">
                  <Check className="size-10" />
                </div>
                <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Concierge Reservation Received
                </h3>
                <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Thank you, <strong className="text-foreground">{firstName || "Client"}</strong>. We have prioritized
                  your <strong className="text-primary font-bold">{activePackage.name}</strong> appointment for your{" "}
                  <strong className="text-foreground">{vehicleYear} {vehicleMake} {vehicleModel}</strong>.
                </p>

                <div className="mt-6 w-full max-w-md rounded-2xl border border-border/80 bg-surface/60 p-4 text-left space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Selected Tier:</span>
                    <span className="font-bold text-primary">{activePackage.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Vehicle:</span>
                    <span>{vehicleYear} {vehicleMake} {vehicleModel} ({currentClass.label})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Arrival Window:</span>
                    <span>{preferredDate || "Earliest Availability"} • {activeSlot.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Service Address:</span>
                    <span className="truncate max-w-[200px]">{serviceAddress}</span>
                  </div>
                  <div className="flex justify-between border-t border-border/40 pt-2 font-bold text-foreground">
                    <span>Starting Estimate:</span>
                    <span className="text-primary text-sm">${calculatedPrice}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-xs font-bold text-foreground shadow-2xs hover:border-primary/40 transition-colors"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Configure Another Vehicle</span>
                </button>
              </div>
            ) : (
              <div>
                {/* STEP 1: VEHICLE & PACKAGE */}
                {currentStep === 1 && (
                  <div className="space-y-7 animate-in fade-in-50 duration-300">
                    {/* Vehicle Class Selector */}
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2 mb-3">
                        <Car className="size-4 text-primary" />
                        <span>Select Vehicle Classification</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {vehicleClasses.map((vc) => {
                          const isSelected = selectedVehicleClass === vc.id;
                          const Icon = vc.icon;
                          return (
                            <button
                              key={vc.id}
                              type="button"
                              onClick={() => setSelectedVehicleClass(vc.id)}
                              className={cn(
                                "flex flex-col items-start rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer shadow-2xs",
                                isSelected
                                  ? "border-primary bg-primary/10 ring-2 ring-primary/25 shadow-xs"
                                  : "border-border/80 bg-surface/40 hover:border-primary/40 hover:bg-surface"
                              )}
                            >
                              <div className="flex items-center justify-between w-full">
                                <Icon className={cn("size-5", isSelected ? "text-primary" : "text-muted-foreground")} />
                                {isSelected && <CheckCircle2 className="size-4 text-primary" />}
                              </div>
                              <div className="mt-2 text-xs sm:text-sm font-bold text-foreground">
                                {vc.label}
                              </div>
                              <div className="mt-0.5 text-[10px] text-muted-foreground">
                                {vc.sub}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Vehicle Make, Model, Year */}
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2 mb-3">
                        <Sparkles className="size-4 text-primary" />
                        <span>Vehicle Identification</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                            Make *
                          </label>
                          <Input
                            placeholder="e.g. Porsche, Ferrari"
                            value={vehicleMake}
                            onChange={(e) => setVehicleMake(e.target.value)}
                            className="h-11 rounded-xl border-border/80 bg-surface/40 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                            Model *
                          </label>
                          <Input
                            placeholder="e.g. 911 GT3, 488 Pista"
                            value={vehicleModel}
                            onChange={(e) => setVehicleModel(e.target.value)}
                            className="h-11 rounded-xl border-border/80 bg-surface/40 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                            Model Year
                          </label>
                          <Input
                            type="number"
                            min="1950"
                            max="2030"
                            placeholder="2025"
                            value={vehicleYear}
                            onChange={(e) => setVehicleYear(e.target.value)}
                            className="h-11 rounded-xl border-border/80 bg-surface/40 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Package Bento Grid */}
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Droplets className="size-4 text-primary" />
                          <span>Select Treatment Package</span>
                        </div>
                        <span className="text-[11px] text-muted-foreground font-semibold">
                          5 Tailored Master Tiers
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {packages.map((pkg) => {
                          const isSelected = selectedService === pkg.name;
                          const tierPrice = pkg.prices[currentClass.priceIndex] ?? pkg.prices[0];
                          return (
                            <button
                              key={pkg.name}
                              type="button"
                              onClick={() => setSelectedService(pkg.name)}
                              className={cn(
                                "flex flex-col justify-between rounded-2xl border p-3.5 text-left transition-all duration-200 cursor-pointer shadow-2xs relative",
                                isSelected
                                  ? "border-primary bg-primary/10 ring-2 ring-primary/30 shadow-xs"
                                  : "border-border/80 bg-surface/40 hover:border-primary/40 hover:bg-surface"
                              )}
                            >
                              {pkg.featured && (
                                <span className="absolute -top-2.5 right-3 rounded-full bg-primary px-2 py-0.5 text-[8.5px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                                  Most Popular
                                </span>
                              )}
                              <div>
                                <div className="flex items-center justify-between">
                                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-muted-foreground">
                                    Tier {pkg.tier}
                                  </span>
                                  {isSelected && <CheckCircle2 className="size-3.5 text-primary" />}
                                </div>
                                <div className="mt-1 text-sm font-bold text-foreground">
                                  {pkg.name}
                                </div>
                                <div className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                                  {pkg.category}
                                </div>
                              </div>

                              <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-2 text-[11px]">
                                <span className="text-muted-foreground font-medium">{pkg.duration}</span>
                                <span className="font-extrabold text-primary">${tierPrice}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 1 CTA */}
                    <div className="pt-2 flex justify-end">
                      <Button
                        type="button"
                        onClick={handleStepNext}
                        className="h-12 px-8 rounded-xl text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
                      >
                        <span>Continue to Schedule & Location</span>
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 2: SCHEDULE & LOCATION */}
                {currentStep === 2 && (
                  <div className="space-y-7 animate-in fade-in-50 duration-300">
                    {/* Service Address */}
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2 mb-3">
                        <MapPin className="size-4 text-primary" />
                        <span>Service Location (Driveway, Office, Hangar)</span>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                          Street Address, City & Zip Code *
                        </label>
                        <Input
                          placeholder="e.g. 1234 Main Street, Dallas, TX 75201"
                          value={serviceAddress}
                          onChange={(e) => setServiceAddress(e.target.value)}
                          className="h-12 rounded-xl border-border/80 bg-surface/40 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                        />
                        <p className="mt-1.5 text-[10px] text-muted-foreground flex items-center gap-1">
                          <Info className="size-3 text-emerald-600" />
                          <span>Our self-contained mobile lab travels up to 300 miles across the Texas fleet corridor.</span>
                        </p>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2 mb-3">
                        <Calendar className="size-4 text-primary" />
                        <span>Preferred Service Date</span>
                      </div>
                      <div className="max-w-xs">
                        <Input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="h-11 rounded-xl border-border/80 bg-surface/40 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                        />
                      </div>
                    </div>

                    {/* Preferred Arrival Window */}
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2 mb-3">
                        <Clock className="size-4 text-primary" />
                        <span>Preferred Arrival Slot</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {arrivalSlots.map((slot) => {
                          const isSelected = preferredSlot === slot.id;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => setPreferredSlot(slot.id)}
                              className={cn(
                                "flex items-center justify-between rounded-2xl border p-3.5 text-left transition-all duration-200 cursor-pointer shadow-2xs",
                                isSelected
                                  ? "border-primary bg-primary/10 ring-2 ring-primary/25 shadow-xs"
                                  : "border-border/80 bg-surface/40 hover:border-primary/40 hover:bg-surface"
                              )}
                            >
                              <div>
                                <div className="text-xs font-bold text-foreground">{slot.label}</div>
                                <div className="text-[11px] text-muted-foreground mt-0.5">{slot.time}</div>
                              </div>
                              {isSelected && <CheckCircle2 className="size-4 text-primary" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2 Actions */}
                    <div className="pt-4 flex items-center justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="h-11 px-5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <ArrowLeft className="size-3.5" />
                        <span>Back</span>
                      </Button>

                      <Button
                        type="button"
                        onClick={handleStepNext}
                        className="h-12 px-8 rounded-xl text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
                      >
                        <span>Continue to Contact Details</span>
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTACT & CONFIRMATION */}
                {currentStep === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in-50 duration-300">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2 mb-1">
                      <ShieldCheck className="size-4 text-primary" />
                      <span>Client Credentials & Special Requests</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                          First Name *
                        </label>
                        <Input
                          required
                          placeholder="Your first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="h-11 rounded-xl border-border/80 bg-surface/40 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                          Last Name *
                        </label>
                        <Input
                          required
                          placeholder="Your last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="h-11 rounded-xl border-border/80 bg-surface/40 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                          Direct Phone Number *
                        </label>
                        <Input
                          required
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-11 rounded-xl border-border/80 bg-surface/40 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                          Email Address *
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="client@exclusive.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-11 rounded-xl border-border/80 bg-surface/40 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                        Vehicle Condition Notes & Specific Requests
                      </label>
                      <Textarea
                        placeholder="Detail paint swirls, matte finish care, leather stains, gated community code, or multi-car requests..."
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        className="min-h-24 rounded-xl border-border/80 bg-surface/40 p-3 text-xs sm:text-sm focus-visible:border-primary focus-visible:bg-card"
                      />
                    </div>

                    {/* Step 3 Actions */}
                    <div className="pt-3 flex items-center justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                        className="h-11 px-5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <ArrowLeft className="size-3.5" />
                        <span>Back</span>
                      </Button>

                      <Button
                        type="submit"
                        className="h-13 px-8 rounded-xl text-xs sm:text-sm font-extrabold shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center gap-2"
                      >
                        <span>CONFIRM & DISPATCH CONCIERGE REQUEST</span>
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: Live Treatment Summary & Guarantee Deck (4 Cols) */}
          <div className="flex flex-col justify-between space-y-5 rounded-[2rem] sm:rounded-[2.5rem] border border-border/80 bg-gradient-to-b from-card via-surface/50 to-card p-6 sm:p-7 shadow-xl ring-1 ring-border/20 lg:col-span-4">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary">
                    LIVE CONFIGURATION
                  </div>
                  <div className="text-base font-extrabold text-foreground">
                    Estimate Summary
                  </div>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                  NO DEPOSIT
                </div>
              </div>

              {/* Dynamic Live Configuration Specs */}
              <div className="mt-5 space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Selected Tier:</span>
                  <span className="font-extrabold text-foreground">{activePackage.name}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Estimated Time:</span>
                  <span className="font-semibold text-foreground">{activePackage.duration}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Vehicle Class:</span>
                  <span className="font-semibold text-foreground">{currentClass.label}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Vehicle Spec:</span>
                  <span className="font-semibold text-foreground truncate max-w-[150px]">
                    {vehicleMake ? `${vehicleMake} ${vehicleModel}` : "Pending Entry"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Arrival Slot:</span>
                  <span className="font-semibold text-foreground">{activeSlot.label}</span>
                </div>

                {/* Total Starting Price Card */}
                <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                      Starting Investment
                    </div>
                    <div className="text-2xl font-black text-primary">
                      ${calculatedPrice}
                    </div>
                  </div>
                  <div className="text-right text-[10px] text-muted-foreground">
                    Includes all deionized water &<br />onboard inverter power
                  </div>
                </div>
              </div>

              {/* White-Glove Guarantee Pillars */}
              <div className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <Droplets className="size-3.5 text-sky-500" />
                  <span>100% Deionized 0 PPM Filtered Water</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <Zap className="size-3.5 text-amber-500" />
                  <span>Autonomous Power (Zero Client Hookup)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <ShieldCheck className="size-3.5 text-emerald-500" />
                  <span>$2,000,000 Insured Garage-Keepers</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Assistance Banner */}
            <div className="border-t border-border/60 pt-4">
              <a
                href="tel:+14697967732"
                className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 transition-all hover:border-primary/50 hover:shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-3.5" />
                  </div>
                  <div>
                    <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-muted-foreground">
                      Direct Concierge
                    </div>
                    <div className="text-xs font-bold text-foreground">
                      (469) 796-7732
                    </div>
                  </div>
                </div>
                <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
