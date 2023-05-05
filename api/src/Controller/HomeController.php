<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'home', methods: 'GET')]
    public function Home(): JsonResponse
    {
        return $this->json(['name' => 'Hello World!']);
    }

    #[Route('/select-data', name: 'select_data', methods: 'GET')]
    public function selectData(): JsonResponse
    {
        $data = [
          ['name' => 'New York', 'code' => 'NY'],
          ['name' => 'Rome', 'code' => 'RM'],
          ['name' => 'London', 'code' => 'LDN'],
          ['name' => 'Istanbul', 'code' => 'IST'],
          ['name' => 'Paris', 'code' => 'PRS'],
        ];

        return $this->json($data);
    }
}