import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import JsxPage from "../pages/jsx/JsxPage";
import CodeIcon from '@mui/icons-material/Code';
import ComponentsPage from "../pages/components/ComponentsPage";
import {
  Category,
  CategorySharp,
  CategoryTwoTone, CompareArrowsOutlined,
  ControlPointDuplicate, Event, FormatAlignCenter, HomeOutlined,
  UpdateDisabledRounded, UpdateRounded, ViewStream
} from "@mui/icons-material";
import PropsPage from "../pages/properties/PropsPage";
import DashboardIndex from "../pages/cyclestate/DashboardIndex";
import CyclePage from "../pages/cyclestate/CyclePage";
import DashboardPageLayout from "../pages/cyclestate/DashboardPageLayout";
import StatePage from "../pages/cyclestate/StatePage";
import ConditionalRenderingPage from "../pages/conditionalrendering/ConditionalRenderingPage";
import ElementsRenderingPage from "../pages/elementsrendering/ElementsRenderingPage";
import EventsPage from "../pages/events/EventsPage";
import CommunicationComponentsPage from "../pages/communicationcomponents/CommunicationComponentsPage";
import HooksPage from "../pages/hooks/HooksPage";
import FormsPage from "../pages/forms/FormsPage";
import FormsMultipleInputPage from "../pages/formsmultipleinput/FormsMultipleInputPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "Instalación",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/jsx",
    element: <JsxPage />,
    state: "jsx",
    sidebarProps: {
      displayText: "Jsx",
      icon: <CodeIcon />
    }
  },
  {
    path: "/components",
    element: <ComponentsPage />,
    state: "components",
    sidebarProps: {
      displayText: "Componentes",
      icon: <Category />
    }
  },
  {
    path: "/props",
    element: <PropsPage />,
    state: "props",
    sidebarProps: {
      displayText: "Propiedades",
      icon: <CategoryTwoTone />
    }
  },
  {
    path: "/cycle_state",
    element: <DashboardPageLayout />,
    state: "cyclestate",
    sidebarProps: {
      displayText: "State - Lifecycle",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "cyclestate.index"
      },
      {
        path: "/cycle_state/state",
        element: <StatePage />,
        state: "cyclestate.state",
        sidebarProps: {
          displayText: "Estados"
        },
      },
      {
        path: "/cycle_state/lifecycle",
        element: <CyclePage />,
        state: "cyclestate.cycle",
        sidebarProps: {
          displayText: "Ciclo de Vida"
        },
      },
    ]
  },
  {
    path: "/conditional_rendering",
    element: <ConditionalRenderingPage />,
    state: "conditionalrendering",
    sidebarProps: {
      displayText: "Renderizado Condicional",
      icon: <UpdateRounded />
    }
  },
  {
    path: "/elements_rendering",
    element: <ElementsRenderingPage />,
    state: "elementsrendering",
    sidebarProps: {
      displayText: "Renderizado Elementos",
      icon: <UpdateRounded />
    }
  },
  {
    path: "/events",
    element: <EventsPage />,
    state: "events",
    sidebarProps: {
      displayText: "Eventos",
      icon: <Event />
    }
  },
  {
    path: "/communication_components",
    element: <CommunicationComponentsPage />,
    state: "communicationcomponents",
    sidebarProps: {
      displayText: "Comunicación Componentes",
      icon: <CompareArrowsOutlined />
    }
  },
  {
    path: "/hooks",
    element: <HooksPage />,
    state: "hooks",
    sidebarProps: {
      displayText: "Hooks",
      icon: <ViewStream />
    }
  },
  {
    path: "/forms",
    element: <FormsPage />,
    state: "forms",
    sidebarProps: {
      displayText: "Formularios",
      icon: <FormatAlignCenter />
    }
  },
  {
    path: "/forms_multiple",
    element: <FormsMultipleInputPage />,
    state: "formsmultipleinput",
    sidebarProps: {
      displayText: "Formularios Multiple Input",
      icon: <FormatAlignCenter />
    }
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;